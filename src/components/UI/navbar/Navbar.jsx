import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from "../../../index";
import cl from './Navbar.module.css'

export default function Navbar() {
  const {store} = useContext(Context);

  return (
    <nav className={cl.nav}>
      <div className={cl.navbar__content}>
        <Link className={cl.tab + " " + cl.active} to='/profile'>Профиль</Link>
        <Link className={cl.tab} to='/login'>Логин</Link>
        <Link className={cl.tab} to='/register'>Регистрация</Link>
        <Link className={cl.tab + " " + cl.logout} to='/' onClick={() => store.logout()}>Выход</Link>
      </div>
    </nav>
  )
}

{/* <div className="navbar__links">
<Link style={{margin: "0 15px",textDecoration: "none", background: "black", color: "white"}} to="/login">Login</Link>
<Link style={{margin: "0 15px",textDecoration: "none", background: "black", color: "white"}} to="/register">Register</Link>
</div> */}