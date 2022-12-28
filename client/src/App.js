import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css"
import { authRouter } from "./router/authRouter";
import { adminRouter } from "./router/adminRouter";
import { factoryRouter } from "./router/factoryRouter"
import { storeRouter } from "./router/storeRouter";
import { serviceCenterRouter } from "./router/serviceCenterRouter"

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