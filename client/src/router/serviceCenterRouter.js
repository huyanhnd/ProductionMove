import ServiceCenterProduct from "./pages/serviceCenter/products/ServiceCenterProducts"
import AddServiceCenterProduct from "./pages/serviceCenter/products/AddServiceCenterProduct";
import ServiceCenterProcess from "./pages/serviceCenter/process/ServiceCenterProcess";
import { Layout } from "../layout/layout";

export const serviceCenterRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "*", element: <NotFoundPage />, },
            { path: "/", element: <FactoryHome /> },
            { path: "/servicecenters_products", element: <ServiceCenterProduct /> },
            { path: "/servicecenters_products/addproducts", element: <AddServiceCenterProduct /> },
            { path: "/servicecenters_process", element: <ServiceCenterProcess /> },
        ],
    }
])