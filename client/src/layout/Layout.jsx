import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout