import { Link, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import './App.css';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div>
      <div className="Head-bar">
        <nav>
          <Link to='/register' className='link-style'><span>Register</span></Link>
          <Link to='/login' className='link-style'><span>Login</span></Link>
        </nav>
      </div>
      <Routes>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}> </Route>
      </Routes>

    </div>
  );
}

export default App;
