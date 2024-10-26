import React, {useContext} from 'react'
import {Route, Routes, Navigate} from "react-router-dom";
import {publicRoutes, privateRoutes} from '../router/routes'
import {Context} from "../index";
import {observer} from "mobx-react-lite";



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
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        key={route.path}
                    />
                )};
                <Route path="/*" element={<Navigate to="/profile" />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        key={route.path}
                    />
                )};
                <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
    );
};

export default observer(MainRouter);

