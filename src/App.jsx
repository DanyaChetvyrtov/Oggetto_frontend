import React from 'react'
import cl from './components/login/Login.module.css'

export default function App() {
  return (
    <div>
      <div className={cl.login__container}>
        <h1>Title</h1>
          <form className={cl.my_form + ' ' + cl.login__content}>
        <div className={cl.form_component}>
          <input className={cl.form_input} type="login" name="login" id="loginName" />
          <label  htmlFor="loginName">Username</label>
        </div>

        <div className={cl.form_component}>
          <input className={cl.form_input} type="password" name="password" id="passwordName"/>
          <label htmlFor="passwordName">Password</label>
        </div>

        <button className={cl.form_btn} type='submit'>Log in</button>
      </form>
      </div>
    </div>
  )
}
