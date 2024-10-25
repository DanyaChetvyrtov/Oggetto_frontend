import from ;
import  from ;
import  from ;
import  from ;

export const privateRoutes = [
    {path: "/about", element: <About />},
    {path: "/posts", element: <Posts />},
    {path: "/posts/:id", element: <PostIdPage />}
]

export const publicRoutes = [
    {path: "/login", element: <Login />},
]