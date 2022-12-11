import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Laptop,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { getRole } from "../../helper/auth";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* Admin Menu */}
        {getRole() === "Admin" ? <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
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
          </ul>
        </div> : null}
        {/* Factory Menu */}
        {getRole() === "Factory" ?
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Factory Manager</h3>
            <ul className="sidebarList">
              <Link to="/factories" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Factory
                </li>
              </Link>
              <Link to="/series" className="link">
                <li className="sidebarListItem">
                  <Laptop className="sidebarIcon" />
                  Series
                </li>
              </Link>
            </ul>
          </div> : null}
        {/* Store Menu */}
        {getRole() === "Store" ?
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
          </div> : null}
        {/* Service Center Menu */}
        {getRole() === "ServiceCenter" ?
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
          </div> : null}
      </div>
    </div>
  );
}
