import { createBrowserRouter } from "react-router-dom";
import ServiceCenterProduct from "../pages/serviceCenter/products/ServiceCenterProduct";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import { Layout } from "../layout/layout";
import ServiceCenterHome from "../pages/serviceCenter/home/ServiceCenterHome";
import ServiceCenterRequest from "../pages/serviceCenter/request/ServiceCenterRequest"; 

export const serviceCenterRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "*", element: <NotFoundPage />, },
            { path: "/", element: <ServiceCenterHome /> },
            { path: "/servicecenter/products", element: <ServiceCenterProduct /> },
            { path: "/servicecenter/request", element: <ServiceCenterRequest /> },
        ],
    }
])