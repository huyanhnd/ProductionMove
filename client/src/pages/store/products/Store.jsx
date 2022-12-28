import StoreProducts from "./StoreProducts";
import StoreFilter from "./StoreFilter";
import "./store.scss"

export default function Warehouse() {
    return (
        <div className="storePage">
            <div className="header">
                <StoreFilter />
            </div>
            <StoreProducts />
        </div>
    )
}