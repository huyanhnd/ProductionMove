import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  WorkOutline,
  Laptop,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { role } = useSelector((state) => state.auth.currentUser);
  const linkColor = document.querySelectorAll(".sidebarListItem");
  function colorLink() {
    linkColor.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  }
  linkColor.forEach(l => l.addEventListener("click", colorLink));
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* Admin Menu */}
        {role === "Admin" ? (
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Admin</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Accounts
                </li>
              </Link>
              <Link to="/productlines" className="link">
                <li className="sidebarListItem">
                  <Laptop className="sidebarIcon" />
                  ProductLines
                </li>
              </Link>
              <Link to="/products" className="link">
                <li className="sidebarListItem">
                  <Laptop className="sidebarIcon" />
                  Products
                </li>
              </Link>
              <Link to="/factories" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Factory
                </li>
              </Link>
              <Link to="/stores" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Store
                </li>
              </Link>
              <Link to="/servicecenters" className="link">
                <li className="sidebarListItem">
                  <WorkOutline className="sidebarIcon" />
                  Service Center
                </li>
              </Link>
            </ul>
          </div>
        ) : null}
        {/* Factory Menu */}
        {role === "Factory" ? (
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Factory Manager</h3>
            <ul className="sidebarList">
              <Link to="/factories" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Factory
                </li>
              </Link>
            </ul>
          </div>
        ) : null}
        {/* Store Menu */}
        {role === "Store" ? (
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Store Manager</h3>
            <ul className="sidebarList">
              <Link to="/stores" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Store
                </li>
              </Link>
            </ul>
          </div>
        ) : null}
        {/* Service Center Menu */}
        {role === "ServiceCenter" ? (
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Service Center Manager</h3>
            <ul className="sidebarList">
              <Link to="/servicecenters" className="link">
                <li className="sidebarListItem">
                  <WorkOutline className="sidebarIcon" />
                  Service Center
                </li>
              </Link>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
