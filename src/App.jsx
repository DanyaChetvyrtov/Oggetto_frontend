import React from 'react'
import cl from './components/login/Login.module.css'
import companyLogo from './imgs/oggetto-logo_tonal-hor-eng_tonal-hor-eng.png'

export default function App() {
  return (
    <div>
      <div className={cl.login__container}>
        <img className={cl.form__image} src={companyLogo} alt='logo'/>
        <form className={cl.my_form + ' ' + cl.login__content}>
          <div className={cl.form_component}>
            <input className={cl.form_input} type="login" name="login" id="loginName" />
            <label htmlFor="loginName">Username</label>
          </div>

          <div className={cl.form_component}>
            <input className={cl.form_input} type="password" name="password" id="passwordName" />
            <label htmlFor="passwordName">Password</label>
          </div>

          <button className={cl.form_btn} type='submit'>Log in</button>
        </form>
      </div>
    </div>
  )
}
