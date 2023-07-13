import { useState } from 'react'
import './styles/LogInPage.css'

const LoginPage = (props,setIsLoggedIn,history,setUserName) => {

  console.log(props)
  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    props.setUserName(login);
    props.setIsLoggedIn(true);
    props.history.push('/');
  }



  return(
    // <h1>Im working</h1>
    <form onSubmit={handleLogin}>
      <div className="Auth_Parrent">
        <div className='Auth_Child'>
          <h1 className='authH1'>Авторизация</h1>
          <div className="authInputs">
            <input 
              className='authInput' 
              type='text' 
              placeholder='Логин' 
              required
              onChange={handleLoginChange}
            ></input>
            <input 
              className='authInput'
              type='password' 
              placeholder='Пароль' 
              required
              onChange={handlePasswordChange}
            ></input>
          </div>
          <button className='authButton' type='submit'>Войти</button>
        </div>
      </div>
    </form>

    

  ) 
}
export default LoginPage;