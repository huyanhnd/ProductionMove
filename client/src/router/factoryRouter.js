import { createBrowserRouter } from "react-router-dom";
import FactoryHome from "../pages/factory/home/FactoryHome"
import AddFactoryProduct from "../pages/factory/warehouse/AddFactoryProduct";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import { Layout } from "../layout/layout";
import NewExport from "../pages/factory/export/newExport/NewExport";
import ExportList from "../pages/factory/export/exportList/ExportList";
import Warehouse from "../pages/factory/warehouse/Warehouse";
import ErrorList from "../pages/factory/errorProduct/ErrorList";

export const factoryRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "*", element: <NotFoundPage />, },
            { path: "/", element: <FactoryHome /> },
            { path: "/factory/warehouse", element: <Warehouse /> },
            { path: "/factory/export", element: <ExportList /> },
            { path: "/factory/newexport", element: <NewExport />},
            { path: "/factory/warehouse/addproducts", element: <AddFactoryProduct /> },
            { path: "/factory/error", element: <ErrorList /> },
        ],
    }
])