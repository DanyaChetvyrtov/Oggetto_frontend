import React, {useContext} from 'react'
import {Route, Routes, Navigate} from "react-router-dom";
import {publicRoutes, privateRoutes} from '../router/routes'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Navbar from "./UI/navbar/Navbar";
import OgRoutes from "./OgRoutes";



const MainRouter = () => {
    // const {isAuth, isLoading} = useContext(AuthContext);
    // console.log(isAuth);

    // if (isLoading) {
    //     return <Loader/>
    // }

    const { store } = useContext(Context);

    return (
        store.isAuth
            ?
            <>
                <Navbar/>
                <OgRoutes routes={privateRoutes} baseRoute={"/profile"} />
            </>

            :
            <OgRoutes routes={publicRoutes} baseRoute={"/login"} />
    );
};

export default observer(MainRouter);

