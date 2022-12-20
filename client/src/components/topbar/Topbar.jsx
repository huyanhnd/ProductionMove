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
          <span className="logo">Production Move</span>
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
