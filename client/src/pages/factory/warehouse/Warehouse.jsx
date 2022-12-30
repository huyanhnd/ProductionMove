import FactoryProduct from "./FactoryProduct";
import { Link } from "react-router-dom";
import "./warehouse.scss"

export default function Warehouse() {
    return (
        <div className="factoryPage">
            <div className="header">
                {/* <FactoryFilter /> */}
                <div className="range"></div>
                <Link to="/factory/warehouse/addproducts" className="linkAddProduct">
                    Add Product
                </Link>
            </div>
            <FactoryProduct />
        </div>
    )
}