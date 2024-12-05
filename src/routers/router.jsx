import { createBrowserRouter } from "react-router";
import Home from "../pages/home/home";
import SingerUser from "../pages/SingleUser/singerUser";
import Posts from "../pages/posts/posts";
import Todos from "../pages/todos/todos";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/user/:id",
        element: <SingerUser/>
    },
    {
        path: "/posts/:id",
        element: <Posts/>
    },
    {
        path: "/todos/:id",
        element: <Todos/>
    },
    {
        path: "/posts/:id",
        element: <Posts/>
    },
])