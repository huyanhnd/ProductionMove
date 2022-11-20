import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FactoryIcon from '@mui/icons-material/Factory';
import StoreIcon from "@mui/icons-material/Store";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import DnsIcon from '@mui/icons-material/Dns';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={require('./assets/corporation.png')} alt="logo" className="logoImg"/>
          <span className="logo">ProductionMove</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">TRANG CHỦ</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Trang chủ</span>
          </li>
          <p className="title">DANH SÁCH</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Người dùng</span>
            </li>
          </Link>
          <Link to="/factories" style={{ textDecoration: "none" }}>
            <li>
              <FactoryIcon className="icon" />
              <span>Cơ sở sản xuất</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <LaptopMacIcon className="icon" />
              <span>Dòng sản phẩm</span>
            </li>
          </Link>
          <li>
            <StoreIcon className="icon" />
            <span>Đại lý phân phối</span>
          </li>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Trung tâm bảo hành</span>
          </li>
          <p className="title">SẢN PHẨM</p>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Quản lý</span>
          </li>
          <li>
            <InsertChartIcon className="icon" />
            <span>Thống kê</span>
          </li>
          <p className="title">DỊCH VỤ</p>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Cài đặt</span>
          </li>
          <li>
            <DnsIcon className="icon" />
            <span>Hệ thống</span>
          </li>
          <p className="title">TÀI KHOẢN</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Tài khoản</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
