import FactoryHome from "./pages/factory/home/FactoryHome";
import FactoryProcess from "./pages/factory/process/FactoryProcess";
import UpdateStoreRequest from "./pages/factory/process/storeRequest/UpdateStoreRequest";
import FactoryWarehouse from "./pages/factory/warehouse/FactoryWarehouse";
import AddFactoryProduct from "./pages/factory/warehouse/AddFactoryProduct";
import { Layout } from "../layout/layout";

export const factoryRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "*", element: <NotFoundPage />, },
            { path: "/", element: <FactoryHome /> },
            { path: "/factory-warehouse", element: <FactoryWarehouse /> },
            { path: "/factory-warehouse/addproducts", element: <AddFactoryProduct /> },
            { path: "/factory-process", element: <FactoryProcess /> },
            { path: "/factory-process/request:code", element: <UpdateStoreRequest /> },
        ],
    }
])