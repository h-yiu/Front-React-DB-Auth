import { useState } from "react";

const LoginPage = () => {

    const [ userName, setUserName ] = useState({
        value: "",
        isTouched: false,
    })

    const [ password, setPassword ] = useState({
        value: "",
        isTouched: false,
    })


    const postData = async () => {
        const user = userName.value;
        const pwd = password.value;
        const url = 'http://localhost:8080/api/login';

        const basicAuth = 'Basic ' + btoa(user + ":" + pwd);

        const data = {
            name: user,
            password: pwd,
        };

        try {

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': basicAuth
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Network response not work");
            }

            const responseData = await response.json();

            console.log(responseData.result);
            if (responseData.result === "Login successfully") {
                alert("Login successfully.");
            }

        } catch(err) {
            console.log('There is problem with post operation: ', err);
            alert("User name or password is not correct.");
        }

    }

    return (
        <div className="outer-container">
        <div className="inner-container">
            <form>
                <div className="input-style">
                    <label className="label-style" htmlFor="un">User Name: </label>
                    <input id="un" value={userName.value} onChange={(e) => setUserName({
                        ...userName,
                        value: e.target.value,
                    })} onBlur={() => setUserName({
                        ...userName,
                        isTouched: true,
                    })}/> 
                    {userName.isTouched && !userName.value &&
                    <span style={{fontSize: 13, color: "red"}}>Required</span>}
                </div>
                <div className="input-style">
                    <label className="label-style"  htmlFor="pw">Password:</label>
                    <input id="pw" type="password" value={password.value} onChange={(e) => setPassword({
                        ...password,
                        value: e.target.value,
                    })} onBlur={() => setPassword({
                        ...password,
                        isTouched: true,
                    })}/>
                    {password.isTouched && !password.value && 
                    <span style={{fontSize: 13, color: "red"}}>Required</span>}
                    {password.isTouched && password.value.length < 8 && password.value.length > 0 &&
                    <span style={{fontSize: 13, color: "red"}}>At least 8 characters</span>}

                </div>
                
                <button onClick={(e) => {
                    e.preventDefault();
                    postData();
                }} disabled={!userName.value || 
                             (!password.value || password.value.length < 8) }>Submit</button>
            </form>
        </div>
    </div>
    )
    

};

export default LoginPage;