import { createBrowserRouter } from "react-router-dom";
import StoreHome from "../pages/store/home/StoreHome"
import StoreProcess from "../pages/store/process/StoreProcess"
import StoreRequestProduct from "../pages/store/products/StoreRequestProduct";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import { Layout } from "../layout/layout";
import Store from "../pages/store/products/Store"

export const storeRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "*", element: <NotFoundPage />, },
            { path: "/", element: <StoreHome /> },
            { path: "/store/products", element: <Store /> },
            { path: "/store/products/request", element: <StoreRequestProduct /> },
            { path: "/store/process", element: <StoreProcess /> },
        ],
    }
])