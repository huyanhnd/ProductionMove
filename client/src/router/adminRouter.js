import { createBrowserRouter } from "react-router-dom";
import UserList from "../pages/admin/account/userList/UserList";
import User from "../pages/admin/account/user/User";
import NewUser from "../pages/admin/account/newUser/NewUser";
import Home from "../pages/admin/home/Home";
import ProductLine from "../pages/admin/productLines/productLine/ProductLine";
import ProductList from "../pages/admin/products/ProductList";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import AddFactory from "../pages/admin/factories/addFactory/AddFactory";
import UpdateFactory from "../pages/admin/factories/updateFactory/UpdateFactory";
import Factory from "../pages/admin/factories/Factory";
import Store from "../pages/admin/stores/Store";
import AddStore from "../pages/admin/stores/addStore/AddStore";
import ServiceCenter from "../pages/admin/serviceCenters/ServiceCenter";
import AddServiceCenter from "../pages/admin/serviceCenters/addServiceCenter/AddServiceCenter";
import NewProductLine from "../pages/admin/productLines/newProductLine/NewProductLine";
import { Layout } from "../layout/layout";
import UpdateStore from "../pages/admin/stores/updateStore/UpdateStore";
import UpdateServiceCenter from "../pages/admin/serviceCenters/updateServiceCenter/UpdateServiceCenter";

export const adminRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "*", element: <NotFoundPage />, },
            { path: "/", element: <Home /> },
            { path: "/users", element: <UserList /> },
            { path: "/user/:userid", element: <User id="1" /> },
            { path: "/newuser", element: <NewUser /> },
            { path: "/productlines", element: <ProductLine /> },
            { path: "/newproductline", element: <NewProductLine />},
            { path: "/products", element: <ProductList /> },
            { path: "/factories/:code", element: <UpdateFactory /> },
            { path: "/factories", element: <Factory /> },
            { path: "/factories/addfactory", element: <AddFactory /> },
            { path: "/stores", element: <Store /> },
            { path: "/stores/:code", element: <UpdateStore /> },
            { path: "/stores/addstore", element: <AddStore /> },
            { path: "/servicecenters", element: <ServiceCenter /> },
            { path: "/servicecenters/:code", element: <UpdateServiceCenter /> },
            { path: "/servicecenters/addservicecenter", element: <AddServiceCenter /> },
        ],
    }
])