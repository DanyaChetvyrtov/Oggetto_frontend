import Login from '../components/login/Login'
import Register from '../components/register/Resgister'
import Profile from '../components/profile/Profile'

export const privateRoutes = [
    {path: "/profile", element: <Profile />}
]

export const publicRoutes = [
    {path: "/login", element: <Login />},
    {path: "/register", element: <Register />},
]