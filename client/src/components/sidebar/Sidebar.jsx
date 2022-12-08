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

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
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
            <Link to="/productLines" className="link">
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
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Factory Manager</h3>
          <ul className="sidebarList">
            <Link to="/factory" className="link">
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
        </div>
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
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Service Center Manager</h3>
          <ul className="sidebarList">
          <Link to="/serviceCenter" className="link">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Service Center
            </li>
          </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
