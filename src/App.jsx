import React, {useContext, useEffect} from 'react'
import Login from './components/login/Login'
import {Context} from "./index";
import {observer} from "mobx-react-lite";

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

    if (!store.isAuth) {
        return (<Login />);
    }


    return (
    <>
        <h1>{store.isAuth ? `Пользователь авторизован ${localStorage.getItem('username')}` : `Авторизуйтесь`}</h1>
        <button onClick={() => store.logout()}>Выйти</button>
    </>
    )
}

export default observer(App);