import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import ProductLineList from "./pages/productLineList/ProductLineList";
import { useSelector } from "react-redux";
import Login from "./pages/login/Login";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Series from "./pages/series/Series";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
import Factory from "./pages/factory/Factory";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import "./App.css"
import GroupedSelect from "./pages/factory/GroupedSelect";

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
            { path: "/user/:userid", element: <User /> },
            { path: "/newuser", element: <NewUser /> },
            { path: "/series", element: <Series /> },
            { path: "/productlines", element: <ProductLineList /> },
            { path: "/products", element: <ProductList /> },
            { path: "/product/:code", element: <Product /> },
            { path: "/newproduct", element: <NewProduct /> },
            { path: "/factories", element: <Factory /> },
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
