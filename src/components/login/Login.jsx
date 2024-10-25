import React, {useContext, useState} from 'react'
import cl from '../../components/login/Login.module.css'
import companyLogo from '../../imgs/oggetto-logo_tonal-hor-eng_tonal-hor-eng.png'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";


const Login = () =>{

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {store} =useContext(Context);

  return (
    <div className={cl.login__container}
         onSubmit={(event) => {
           event.preventDefault();
         }}>
        <img className={cl.form__image} src={companyLogo} alt='logo'/>
        <form className={cl.my_form + ' ' + cl.login__content}>
          <div className={cl.form_component}>
            <input className={cl.form_input}
                   type="login"
                   name="login"
                   id="loginName"
                   value={username}
                   onChange={evt => setUsername(evt.target.value)}
            />
            <label htmlFor="loginName">Username</label>
          </div>

          <div className={cl.form_component}>
            <input className={cl.form_input}
                   type="password"
                   name="password"
                   id="passwordName"
                   onChange={(evt) => setPassword(evt.target.value)}
                   value={password}
            />
            <label htmlFor="passwordName">Password</label>
          </div>

          <button
              className={cl.form_btn}
              onClick={() => store.login(username, password)}>Log in</button>
        </form>
      </div>
  )
}

export default observer(Login);
