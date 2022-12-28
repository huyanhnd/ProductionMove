import ServiceCenterProducts from "./ServiceCenterProducts";
import ServiceCenterFilter from "./ServiceCenterFilter"
import "./serviceCenter.scss"

export default function ServiceCenter() {
    return (
        <div className="storePage">
            <div className="header">
                <ServiceCenterFilter />
            </div>
            <ServiceCenterProducts />
        </div>
    )
}