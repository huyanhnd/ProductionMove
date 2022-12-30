import "./sidebar.css";
import {
  SendToMobile,
  Home,
  PermIdentity,
  Storefront,
  WorkOutline,
  Laptop,
  Warehouse,
  Settings,
  BarChart
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Sidebar() {
  const { currentUser } = useSelector((state) => state.auth);
  const [isActive, setIsActive] = useState(1);

  const navList = [
    {
      role: "Admin",
      navChild: [
        {
          icon: Home,
          title: "Home",
          link: "/",
          key: 1,
        },
        {
          icon: PermIdentity,
          title: "Accounts",
          link: "/users",
          key: 2,
        },
        {
          icon: Laptop,
          title: "ProductLines",
          link: "/productlines",
          key: 3,
        },
        {
          icon: Laptop,
          title: "Products",
          link: "/products",
          key: 4,
        },
        {
          icon: WorkOutline,
          title: "Factory",
          link: "/factories",
          key: 5,
        },
        {
          icon: Storefront,
          title: "Store",
          link: "/stores",
          key: 6,
        },
        {
          icon: WorkOutline,
          title: "Service Center",
          link: "/servicecenters",
          key: 7,
        }]
    },
    {
      role: "Factory",
      navChild: [
        {
          icon: BarChart,
          title: "Home",
          link: "/",
          key: 1,
        },
        {
          icon: Warehouse,
          title: "Warehouse",
          link: "/factory/warehouse",
          key: 2,
        },
        {
          icon: SendToMobile,
          title: "Export",
          link: "/factory/export",
          key: 3,
        },
        {
          icon: Settings,
          title: "Error Product",
          link: "/factory/error",
          key: 4,
        },
      ]
    },
    {
      role: "Store",
      navChild: [
        {
          icon: Home,
          title: "Home",
          link: "/",
          key: 1,
        },
        {
          icon: Storefront,
          title: "Store",
          link: "/store/products",
          key: 2,
        },
        {
          icon: Settings,
          title: "Import",
          link: "/store/import",
          key: 3,
        },
        // {
        //   icon: WorkOutline,
        //   title: "Warranty",
        //   link: "/store/warranty",
        //   key: 4,
        // },
      ]
    },
    {
      role: "ServiceCenter",
      navChild: [
        {
          icon: Home,
          title: "Home",
          link: "/",
          key: 1,
        },
        {
          icon: Settings,
          title: "Request",
          link: "/servicecenter/request",
          key: 3,
        },
      ]
    },
  ]

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {navList.map((item) => (
          currentUser.role === item.role ? <div className="sidebarMenu">
            <h3 className="sidebarTitle">{currentUser.managementName}</h3>
            <ul className="sidebarList">
              {
                item.navChild.map((child) => (
                  <Link onClick={() => { setIsActive(child.key) }} to={child.link} className="link">
                    <li className={isActive === child.key ? "sidebarListItem active" : "sidebarListItem"}>
                      <child.icon className="sidebarIcon" />
                      <h3 className="sidebarText">{child.title}</h3>
                      {/* {child.title} */}
                    </li>
                  </Link>
                ))
              }
            </ul>
          </div> : null
        ))}
      </div>
    </div>
  );
}
