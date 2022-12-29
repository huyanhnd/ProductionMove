import { createBrowserRouter } from "react-router-dom";

import ServiceCenterProduct from "../pages/serviceCenter/products/ServiceCenterProducts"
import AddServiceCenterProduct from "../pages/serviceCenter/products/AddServiceCenterProduct";
import ServiceCenterProcess from "../pages/serviceCenter/process/ServiceCenterProcess";
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
            { path: "/servicecenters_products", element: <ServiceCenterProduct /> },
            { path: "/servicecenters_products/addproducts", element: <AddServiceCenterProduct /> },
            { path: "/servicecenters_process", element: <ServiceCenterProcess /> },
        ],
    }
])