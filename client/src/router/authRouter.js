import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login"

export const authRouter = createBrowserRouter([
    { path: "/", element: <Login /> }
])