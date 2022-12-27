import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css"
import { authRouter } from "./router/authRouter";
import { adminRouter } from "./router/adminRouter";
import { factoryRouter } from "./router/factoryRouter"
import { storeRouter } from "./router/storeRouter";
import { serviceCenterRouter } from "./router/serviceCenterRouter"
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/admin/home/Home";
import Products from "./pages/admin/products/productList/Products";
import NewUser from "./pages/admin/account/newUser/NewUser";
import ProductLine from "./pages/admin/productLines/productLine/ProductLine";
import Factory from "./pages/admin/factories/Factory";
import Login from "./pages/login/Login";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import UserList from "./pages/admin/account/userList/UserList";
import User from "./pages/admin/account/user/User";
import NewProduct from "./pages/admin/products/newProduct/NewProduct";
import ServiceCenter from "./pages/admin/serviceCenters/ServiceCenter";
import UpdateFactory from "./pages/admin/factories/updateFactory/UpdateFactory";
import FactoryHome from "./pages/factory/home/FactoryHome";
import FactoryProcess from "./pages/factory/process/FactoryProcess";
import StoreHome from "./pages/store/home/StoreHome"
import Store from "./pages/admin/stores/Store"
import StoreProducts from "./pages/store/products/StoreProducts"
import StoreProcess from "./pages/store/process/StoreProcess"
import UpdateStoreRequest from "./pages/factory/process/storeRequest/UpdateStoreRequest";
import FactoryWarehouse from "./pages/factory/warehouse/FactoryWarehouse";
import AddFactoryProduct from "./pages/factory/warehouse/AddFactoryProduct";
import ServiceCenterProduct from "./pages/serviceCenter/products/ServiceCenterProducts"
import AddServiceCenterProduct from "./pages/serviceCenter/products/AddServiceCenterProduct";
import ServiceCenterProcess from "./pages/serviceCenter/process/ServiceCenterProcess";
import StoreRequestProduct from "./pages/store/products/StoreRequestProduct";
import NewProductLine from "./pages/admin/productLines/newProductLine/NewProductLine";
import AddFactory from "./pages/admin/factories/addFactory/AddFactory";
import AddStore from "./pages/admin/stores/addStore/AddStore";
import AddServiceCenter from "./pages/admin/serviceCenters/addServiceCenter/AddServiceCenter";

const checkRoute = (role) => {
    switch (role) {
        case "Admin":
            return adminRouter;
        case "Factory":
            return factoryRouter;
        case 'Store':
            return storeRouter;
        case 'ServiceCenter':
            return serviceCenterRouter;
    }
}

function App() {
    const { currentUser } = useSelector((state) => state.auth);
    return (
        <div>
            <RouterProvider router=
                {
                    currentUser ? checkRoute(currentUser.role) : authRouter
                }
            />
        </div>
    );
}

export default App;