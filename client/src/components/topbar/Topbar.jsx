import React from "react";
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
          <img src="https://firebasestorage.googleapis.com/v0/b/productionmove-3cd59.appspot.com/o/corporation.png?alt=media&token=704eb759-5d32-4ab0-86c4-74ad3f5c2d52" alt="" className="logo"/>
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
          <div className="topbarIconContainer" onClick={handleLogout}>
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
}
