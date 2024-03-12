import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import Login from "../pages/Auth/Login";
import AIContent from "../pages/AIContent";

const router = createBrowserRouter([{
    path : '/', element: <HomePage/>},
    {path : '/login', element: <Login/>},
    {path : '/text', element: <AIContent/>}
])

export default router