import ServiceCenterList from "./ServiceCenterList"
import AddressFilter from "../../../components/addressFilter/AddressFilter"
import "./serviceCenter.css"

export default function ServiceCenter() {
    return (
    <div className="factoryPage">
        <AddressFilter />
        <ServiceCenterList />
    </div>
    )
}