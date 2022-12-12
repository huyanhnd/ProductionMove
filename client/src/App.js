import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import ProductLineList from "./pages/productLineList/ProductLineList";
import { useSelector } from "react-redux";
import Login from "./pages/login/Login";
import UserList from "./pages/userList/UserList";
import Series from "./pages/series/Series";
import FactoryList from "./pages/factory/FactoryList";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import "./app.css"

const Layout = () => {
    return (
        <div className="app">
            <Topbar />
            <div className="container">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "*", element: <NotFoundPage />, },
            { path: "/", element: <Home /> },
            { path: "/users", element: <UserList /> },
            { path: "/series", element: <Series /> },
            { path: "/productlines", element: <ProductLineList /> },
            { path: "/factories", element: <FactoryList /> },
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
            <RouterProvider router={currentUser ? appRouter : authRouter} />
        </div>
    );
}

export default App;
