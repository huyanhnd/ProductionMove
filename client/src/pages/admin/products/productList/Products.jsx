import ProductList from "./ProductList"
import ProductFilter from "./ProductFilter"
import "./products.scss"

export default function Products() {
    return (
        <div className="factoryPage">
            <div className="header">
                <ProductFilter />
            </div>
            <ProductList />
        </div>
    )
}