import { createBrowserRouter } from "react-router-dom";
import ServiceCenterProduct from "../pages/serviceCenter/products/ServiceCenterProduct";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import { Layout } from "../layout/layout";
import ServiceCenterHome from "../pages/serviceCenter/home/ServiceCenterHome";

export const serviceCenterRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "*", element: <NotFoundPage />, },
            { path: "/", element: <ServiceCenterHome /> },
            { path: "/servicecenters/products", element: <ServiceCenterProduct /> },
        ],
    }
])