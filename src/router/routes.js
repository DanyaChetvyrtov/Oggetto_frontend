import Login from '../components/login/Login'
import Register from '../components/register/Resgister'
import Profile from '../components/profile/Profile'
import Events from "../components/events/Events";

export const privateRoutes = [
    {path: "/profile", element: <Profile />},
    {path: "/events", element: <Events />},
]

export const publicRoutes = [
    {path: "/login", element: <Login />},
    {path: "/register", element: <Register />},
]