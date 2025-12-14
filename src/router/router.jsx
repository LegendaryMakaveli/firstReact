import {createBrowserRouter} from "react-router";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Products from "../component/products";
import CartPage from "../pages/CartPage";
import SingleProduct from "../component/singleProduct"


const router = createBrowserRouter([
    {path: "/",  element: <Login/>},            //This is for default path......//This is like a default page....
    {path: "/register", element: <Register/>},       //This is for register path....//This is like a register page....
    {path: "/products", element: <Products />},
    {path: "/cart", element: <CartPage />},
    {path: "/products/:id", element: <SingleProduct />}
])

export default router;