import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { NotificationsNone, Settings, Logout } from "@mui/icons-material";
import { logout } from "../../redux/authSlice"
import { useDispatch } from "react-redux";

export default function Topbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src="../../../asset/image/corporation.png" alt="" className="logo" />
          <span className="logoTitle">Production Move</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <Link to="/" className="topbarIconContainer" onClick={handleLogout}>
            <Logout />
          </Link>
        </div>
      </div>
    </div>
  );
}
