import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css"
import Login from "./pages/login/Login";


import { adminRouter } from "./router/adminRouter";
import { Layout } from "./layout/layout";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            


        ],
    }
]);

const authRouter = createBrowserRouter([
    { path: "/", element: <Login /> }
])

function App() {
    const { currentUser } = useSelector((state) => state.auth);
    return (
        <div>
            <RouterProvider router={currentUser ? adminRouter : authRouter} />
        </div>
    );
}

export default App;