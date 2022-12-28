import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";
import "./products.scss";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="productPage">
      <div className="header">
        <ProductFilter />
        <div className="range"></div>
        <Link to="/factories/addfactory" className="add-product">
          Add Factory
        </Link>
      </div>
      <ProductList />
    </div>
  );
}
