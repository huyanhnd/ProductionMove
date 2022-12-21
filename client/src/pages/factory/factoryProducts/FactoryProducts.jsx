import "./factoryProducts.css"
import WidgetLg from "../../../components/widgetLg/WidgetLg";
import FactoryProduct from "./FactoryProduct";
import { factory_products } from "../../../dummyData";

export default function FactoryProducts() {
    const data = factory_products
    console.log(factory_products);
    return (
        <div className="factoryProducts-page">
            <h3 className="factoryProducts-title">All products of factory </h3>
            <table className="factoryProducts-table">
                <tbody>
                    <tr className="">
                        <th className="factoryProducts-th">No.</th>
                        <th className="factoryProducts-th">Product</th>
                        <th className="factoryProducts-th">Serial Number</th>
                        <th className="factoryProducts-th">Manufacturing Date</th>
                        <th className="factoryProducts-th">Price</th>
                        <th className="factoryProducts-th">Status</th>
                    </tr>
                    {factory_products.map((item,index) => {
                        return <FactoryProduct item={item}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

