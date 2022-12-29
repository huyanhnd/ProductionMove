import ProductList from "./ProductList";
import "./products.css";
import ProductFilter from "./ProductFilter";

import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="productPage">
      <div className="header">
        <ProductFilter />
      </div>
      <ProductList />
    </div>
  );
}
