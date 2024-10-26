import React, { useContext, useEffect } from 'react'
import Login from './components/login/Login'
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import Resgister from './components/register/Resgister';
import MainRouter from './components/MainRouter';
import Navbar from './components/UI/navbar/Navbar';
import Profile from './components/profile/Profile';

function App() {

    const { store } = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('tokenA')) {
            store.checkAuth();
        }
    }, []);

    if (store.isLoading) {
        return <div>Загрузка...</div>;
    }

    /// Заменить на !store.isAuth
    // if (!store.isAuth) {
    //     return (<Login />);
    // }
    

    return (
        <>

            <BrowserRouter>
                <Navbar />

                <MainRouter />
            </BrowserRouter>

            <h1>{store.isAuth ? `Пользователь авторизован ${localStorage.getItem('username')}` : `Авторизуйтесь`}</h1>
            <button onClick={() => store.logout()}>Выйти</button>
        </>
    )
}

export default observer(App);