import StoreProducts from "./StoreProducts";
import StoreFilter from "./StoreFilter";
import "./store.scss";
import { Link } from "react-router-dom";

export default function Warehouse() {
  return (
    <div className="storePage">
      <div className="header">
        <StoreFilter />
        <div className="range"></div>
        <Link to="/store-products/request" className="add-serviceCenter">
          Request Product
        </Link>
      </div>
      <StoreProducts />
    </div>
  );
}
