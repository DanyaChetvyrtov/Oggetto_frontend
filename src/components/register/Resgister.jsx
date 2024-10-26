import React, {useContext, useState} from 'react'
import cl from '../../components/login/Login.module.css'
import companyLogo from '../../imgs/oggetto-logo_tonal-hor-eng_tonal-hor-eng.png'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

import { Link } from "react-router-dom";



const Resgister = () => {

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const {store} = useContext(Context);


  return (
    <div className={cl.login__container}
         onSubmit={(event) => {
           event.preventDefault();
         }}>
        <img className={cl.form__image} src={companyLogo} alt='logo'/>
        <form className={cl.my_form + ' ' + cl.login__content}>
          <div className={cl.form_component}>
            <input className={cl.form_input}
                   type="name"
                   name="name"
                   id="name"
                   value={name}
                   onChange={evt => setName(evt.target.value)}
            />
            <label htmlFor="name">Username</label>
          </div>

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
                   onChange={(evt) => {
                     setPassword(evt.target.value)
                     console.log(password)
                  }}
                   value={password}
            />
            <label htmlFor="passwordName">Password</label>
          </div>

          <div className={cl.form_component}>
            <input className={cl.form_input}
                   type="passwordConfirmation"
                   name="passwordConfirmation"
                   id="passwordConfirmationName"
                   onChange={(evt) => setPasswordConfirmation(evt.target.value)}
                   value={passwordConfirmation}
            />
            <label htmlFor="passwordConfirmation">Password</label>
          </div>


          <div className={cl.form__btns__container}>

          <button
              className={cl.form_btn}
              onClick={() => {
                
                store.registration(name, username, password, passwordConfirmation)}}>
                  Register
                </button>
                <button 
                className={cl.form_btn}>
                  <Link style={{textDecoration: 'none', color: 'black'}} to='/login'>Log in</Link>
                  </button>
                </div>
        </form>
      </div>
  )
}

export default observer(Resgister);