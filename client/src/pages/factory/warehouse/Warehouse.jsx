import FactoryProduct from "./FactoryProduct";
import FactoryFilter from "./FactoryFilter";
import { Link } from "react-router-dom";
import "./warehouse.scss"

export default function Warehouse() {
    return (
        <div className="factoryPage">
            <div className="header">
                <FactoryFilter />
                <Link to="/factory/warehouse/addproducts" className="linkAddProduct">
                    Add Product
                </Link>
            </div>
            <FactoryProduct />
        </div>
    )
}