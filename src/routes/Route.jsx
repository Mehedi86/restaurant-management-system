import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Login from "../pages/Login";
import FoodRequest from "../pages/FoodRequest";
import Registration from "../pages/Registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/foodRequest/:category',
                element: <FoodRequest/>
            },
            {
                path: '/dashboard',
                element: <h2>This is dashboard</h2>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/registration',
                element: <Registration/>
            }
        ]
    }
])

export default router