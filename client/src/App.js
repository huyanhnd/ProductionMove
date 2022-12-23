import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/admin/home/Home";
import ProductList from "./pages/admin/products/productList/ProductList";
import NewUser from "./pages/admin/account/newUser/NewUser";
import ProductLine from "./pages/admin/productLines/productLine/ProductLine";
import Factory from "./pages/admin/factories/Factory";
import Login from "./pages/login/Login";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import UserList from "./pages/admin/account/userList/UserList";
import User from "./pages/admin/account/user/User";
import NewProduct from "./pages/admin/products/newProduct/NewProduct";
import ServiceCenter from "./pages/admin/serviceCenters/ServiceCenter";
import UpdateFactory from "./pages/admin/factories/updateFactory/UpdateFactory";
import "./App.css"
import FactoryHome from "./pages/factory/home/FactoryHome";
import FactoryProcess from "./pages/factory/process/FactoryProcess";
import UpdateStoreRequest from "./pages/factory/process/storeRequest/UpdateStoreRequest";
import FactoryWarehouse from "./pages/factory/warehouse/FactoryWarehouse";
import AddProduct from "./pages/factory/warehouse/AddProduct";

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
            { path: "/factory-warehouse", element:  <FactoryWarehouse />},
            { path: "/factory-warehouse/addproducts", element:  <AddProduct />},
            { path: "/factory-process", element:  <FactoryProcess />},
            { path: "/factory-process/request:code", element:  <UpdateStoreRequest />},
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
