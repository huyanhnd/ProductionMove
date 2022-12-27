import ServiceCenterList from "./ServiceCenterList"
import AddressFilter from "../../../components/addressFilter/AddressFilter"
import "./serviceCenter.css"
import { Link } from "react-router-dom"

export default function ServiceCenter() {
    return (
        <div className="factoryPage">
            <div className="header">
                <AddressFilter type='ServiceCenter' />
                <Link to="/servicecenters/addservicecenter" className="add-factory">
                    Add Service Center
                </Link>
            </div>
            <ServiceCenterList />
        </div>
    )
}