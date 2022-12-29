import StoreProducts from "./StoreProducts";
import "./store.scss";
import { Link } from "react-router-dom";

export default function Warehouse() {
  return (
    <div className="storePage">
      <div className="header">
        {/* <StoreFilter /> */}
        <div className="range"></div>
      </div>
      <StoreProducts />
    </div>
  );
}
