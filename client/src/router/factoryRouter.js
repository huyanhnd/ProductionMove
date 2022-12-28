import { createBrowserRouter } from "react-router-dom";
import FactoryHome from "../pages/factory/home/FactoryHome"
import FactoryProduct from "../pages/factory/warehouse/FactoryProduct";
import AddFactoryProduct from "../pages/factory/warehouse/AddFactoryProduct";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import { Layout } from "../layout/layout";
import NewExport from "../pages/factory/export/newExport/NewExport";
import ExportList from "../pages/factory/export/exportList/ExportList";
import FactoryExport from "../pages/factory/process/export/FactoryExport";
import Warehouse from "../pages/factory/warehouse/Warehouse";

export const factoryRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "*", element: <NotFoundPage />, },
            { path: "/", element: <FactoryHome /> },
            { path: "/factory/warehouse", element: <FactoryWarehouse /> },
            { path: "/factory/export", element: <ExportList /> },
            { path: "/factory/newexport", element: <NewExport />},
            { path: "/factory/warehouse/addproducts", element: <AddFactoryProduct /> },
            { path: "/factory-warehouse", element: <Warehouse /> },
            { path: "/factory-warehouse/addproducts", element: <AddFactoryProduct /> },
            { path: "/factory-process", element: <FactoryProcess /> },
            { path: "/factory-process/request:code", element: <UpdateStoreRequest /> },
            { path: "/factory-export", element: <FactoryExport /> },
        ],
    }
])