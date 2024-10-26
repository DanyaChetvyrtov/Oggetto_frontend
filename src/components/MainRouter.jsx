import React, { useContext } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from '../router/routes'


export default function MainRouter() {

  return (
    <Routes>

      <Route path="*" element={<Navigate to="/" replace />} />

      {/* {path: "/login", element: <Login />},
    {path: "/register", element: <Register />},
    {path: "/profile", element: <Profile />} */}

      {publicRoutes.map((route) => {
        return <Route 
        key={route.path} 
        path={route.path} 
        element={route.element}/>
      })}
      
    </Routes>
      
  )
}
