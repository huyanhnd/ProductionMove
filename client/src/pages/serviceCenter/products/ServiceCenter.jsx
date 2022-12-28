import ServiceCenterProducts from "./ServiceCenterProducts";
import ServiceCenterFilter from "./ServiceCenterFilter";
import "./serviceCenter.scss";
import { Link } from "react-router-dom";

export default function ServiceCenter() {
  return (
    <div className="storePage">
      <div className="header">
        <ServiceCenterFilter />
        <div className="range"></div>
        <Link
          to="/servicecenters_products/addproducts"
          className="add-serviceCenter"
        >
          Add Product
        </Link>
      </div>
      <ServiceCenterProducts />
    </div>
  );
}
