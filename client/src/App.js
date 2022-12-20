import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import ProductList from "./pages/product/productList/ProductList";
import NewUser from "./pages/account/newUser/NewUser";
import ProductLine from "./pages/product/productLine/ProductLine";
import Factory from "./pages/factory/Factory";
import Login from "./pages/login/Login";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import UserList from "./pages/account/userList/UserList";
import User from "./pages/account/user/User";
import Product from "./pages/product/product/Product";
import NewProduct from "./pages/product/newProduct/NewProduct";
import ServiceCenter from "./pages/serviceCenter/ServiceCenter";
import Store from "./pages/store/StoreList";
import UpdateFactory from "./pages/factory/updateFactory/UpdateFactory";
import "./App.css"
import FactoryHome from "./pages/factory/FactoryHome";

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
            { path: "/productlines", element: <ProductLine /> },
            { path: "/products", element: <ProductList /> },
            { path: "/product/:code", element: <UpdateFactory /> },
            { path: "/newproduct", element: <NewProduct /> },
            { path: "/factory", element:  <FactoryHome />},
            { path: "/factories", element: <Factory /> },
            { path: "/stores", element: <ServiceCenter /> },
            { path: "/servicecenters", element: <ServiceCenter /> },
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
