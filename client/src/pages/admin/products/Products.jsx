import ProductList from "./ProductList";
import "./products.css";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="productPage">
      <ProductList />
    </div>
  );
}
