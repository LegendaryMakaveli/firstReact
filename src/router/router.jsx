import {createBrowserRouter} from "react-router";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";

const router = createBrowserRouter([
    {path: "/",  element: <Login/>},            //This is for default path......//This is like a default page....

    {path: "/register", element: <Register/>},       //This is for register path....//This is like a register page....
])

export default router;