import { createBrowserRouter } from "react-router-dom";

import ServiceCenterProduct from "../pages/serviceCenter/products/ServiceCenterProducts"
import AddServiceCenterProduct from "../pages/serviceCenter/products/AddServiceCenterProduct";
import ServiceCenterProcess from "../pages/serviceCenter/process/ServiceCenterProcess";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import { Layout } from "../layout/layout";
import ServiceCenter from "../pages/serviceCenter/products/ServiceCenter";

export const serviceCenterRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "*", element: <NotFoundPage />, },
            { path: "/servicecenters/products", element: <ServiceCenter /> },
            { path: "/servicecenters/products/addproducts", element: <AddServiceCenterProduct /> },
            { path: "/servicecenters/process", element: <ServiceCenterProcess /> },
        ],
    }
])