
import { createBrowserRouter } from "react-router-dom"
import Layout from "../Lay/Layout"
import Homescreen from '../Lay/Homescreen'
import Login from "../Authflow/Login"
import Verify from "../Authflow/Verify"
import Register from "../Authflow/Register"
import Notification from "../Authflow/Notification"


export const mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Homescreen />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/verify",
                element: <Verify />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/notif",
                element: <Notification />
            }
        ]
    }

])