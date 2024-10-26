import Login from '../components/login/Login'
import Register from '../components/register/Resgister'
import Profile from '../components/profile/Profile'

// export const privateRoutes = [
//     {path: "/about", element: <About />},
//     {path: "/posts", element: <Posts />},
//     {path: "/posts/:id", element: <PostIdPage />}
// ]

export const publicRoutes = [
    {path: "/login", element: <Login />},
    {path: "/register", element: <Register />},
    {path: "/profile", element: <Profile />}
]