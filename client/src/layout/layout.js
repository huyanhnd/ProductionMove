import { Outlet } from "react-router-dom";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";

export const Layout = () => {
    return (
        <div className="app">
            <Topbar />
            <div className="container">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
};