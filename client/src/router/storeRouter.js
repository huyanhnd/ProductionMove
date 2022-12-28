import { createBrowserRouter } from "react-router-dom";
import StoreHome from "../pages/store/home/StoreHome"
import StoreProducts from "../pages/store/products/StoreProducts"
import StoreProcess from "../pages/store/process/StoreProcess"
import StoreRequestProduct from "../pages/store/products/StoreRequestProduct";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import { Layout } from "../layout/layout";

export const storeRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "*", element: <NotFoundPage />, },
            { path: "/", element: <StoreHome /> },
            { path: "/store-products", element: <StoreProducts /> },
            { path: "/store-products/request", element: <StoreRequestProduct /> },
            { path: "/store-process", element: <StoreProcess /> },
        ],
    }
])