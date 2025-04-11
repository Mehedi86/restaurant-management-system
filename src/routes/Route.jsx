import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import FoodRequest from "../pages/FoodRequest";

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
                path: '/foodRequest',
                element: <FoodRequest/>
            },
            {
                path: '/dashboard',
                element: <h2>This is dashboard</h2>
            }
        ]
    }
])

export default router