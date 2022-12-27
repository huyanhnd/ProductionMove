import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css"
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/admin/home/Home";
import Products from "./pages/admin/products/productList/Products";
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
import FactoryHome from "./pages/factory/home/FactoryHome";
import FactoryProcess from "./pages/factory/process/FactoryProcess";
import StoreHome from "./pages/store/home/StoreHome"
import Store from "./pages/admin/stores/Store"
import StoreProducts from "./pages/store/products/StoreProducts"
import StoreProcess from "./pages/store/process/StoreProcess"
import UpdateStoreRequest from "./pages/factory/process/storeRequest/UpdateStoreRequest";
import FactoryWarehouse from "./pages/factory/warehouse/FactoryWarehouse";
import AddFactoryProduct from "./pages/factory/warehouse/AddFactoryProduct";
import ServiceCenterProduct from "./pages/serviceCenter/products/ServiceCenterProducts"
import AddServiceCenterProduct from "./pages/serviceCenter/products/AddServiceCenterProduct";
import ServiceCenterProcess from "./pages/serviceCenter/process/ServiceCenterProcess";
import StoreRequestProduct from "./pages/store/products/StoreRequestProduct";
import AddFactory from "./pages/admin/factories/addFactory/AddFactory";
import AddStore from "./pages/admin/stores/addStore/AddStore";
import AddServiceCenter from "./pages/admin/serviceCenters/addServiceCenter/AddServiceCenter";

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
            { path: "/products", element: <Products /> },
            { path: "/product/:code", element: <UpdateFactory /> },
            { path: "/newproduct", element: <NewProduct /> },
            { path: "/factory", element:  <FactoryHome />},
            { path: "/factory-warehouse", element:  <FactoryWarehouse />},
            { path: "/factory-warehouse/addproducts", element:  <AddFactoryProduct />},
            { path: "/factory-process", element:  <FactoryProcess />},
            { path: "/factory-process/request:code", element:  <UpdateStoreRequest />},
            { path: "/factories", element: <Factory /> },
            { path: "/factories/addfactory", element: <AddFactory /> },
            { path: "/stores", element: <Store /> },
            { path: "/stores/addstore", element: <AddStore /> },
            { path: "/store", element: <StoreHome /> },
            { path: "/store-products", element: <StoreProducts /> },
            { path: "/store-products/request", element: <StoreRequestProduct /> },
            { path: "/store-process", element: <StoreProcess /> },
            { path: "/servicecenters", element: <ServiceCenter /> },
            { path: "/servicecenters/addservicecenter", element: <AddServiceCenter /> },
            { path: "/servicecenters_products", element: <ServiceCenterProduct /> },
            { path: "/servicecenters_products/addproducts", element: <AddServiceCenterProduct /> },
            { path: "/servicecenters_process", element:  <ServiceCenterProcess />},
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