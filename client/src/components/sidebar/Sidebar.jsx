import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  WorkOutline,
  Laptop,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { useState } from "react";

export default function Sidebar() {
  const { role } = useSelector((state) => state.auth.currentUser);
  const [isActive, setIsActive] = useState(1);

  const navList = [
    {
      role: "Admin",
      navChild: [
        {
          icon: LineStyle,
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
          icon: LineStyle,
          title: "Factory",
          link: "/factory",
          key: 1,
        },
        {
          icon: WorkOutline,
          title: "Factory",
          link: "/factories",
          key: 7,
        },
      ]
    },
    {
      role: "Store",
      navChild: [
        {
          icon: LineStyle,
          title: "Home",
          link: "/",
          key: 1,
        },
        {
          icon: Storefront,
          title: "Store",
          link: "/stores",
          key: 7,
        },
      ]
    },
    {
      role: "ServiceCenter",
      navChild: [
        {
          icon: LineStyle,
          title: "Home",
          link: "/",
          key: 1,
        },
        {
          icon: WorkOutline,
          title: "ServiceCenter",
          link: "/servicecenters",
          key: 7,
        },
      ]
    },
  ]

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {navList.map((item) => (
          role === item.role ? <div className="sidebarMenu">
            <h3 className="sidebarTitle">{item.role}</h3>
            <ul className="sidebarList">
              {
                item.navChild.map((child) => (
                  <Link onClick={() => { setIsActive(child.key) }} to={child.link} className="link">
                    <li className={isActive === child.key ? "sidebarListItem active" : "sidebarListItem"}>
                      <child.icon className="sidebarIcon" />
                      {child.title}
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
