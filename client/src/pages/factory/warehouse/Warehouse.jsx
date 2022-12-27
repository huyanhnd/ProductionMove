import FactoryProduct from "./FactoryProduct";
import FactoryFilter from "./FactoryFilter";
import "./warehouse.scss"

export default function Warehouse() {
    return (
        <div className="factoryPage">
            <div className="header">
                <FactoryFilter />
            </div>
            <FactoryProduct />
        </div>
    )
}