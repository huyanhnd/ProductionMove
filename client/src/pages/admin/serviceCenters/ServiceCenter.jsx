import ServiceCenterList from "./ServiceCenterList"
import AddressFilter from "../../../components/addressFilter/AddressFilter"
import "./serviceCenter.css"
import { Link } from "react-router-dom"

export default function ServiceCenter() {
    return (
        <div className="servicecenterPage">
            <div className="header">
                <AddressFilter type='ServiceCenter' />
                <div className="range"></div>
                <Link to="/servicecenters/addservicecenter" className="add-serviceCenter" >
                    Add Service Center
                </Link>
            </div>
            <ServiceCenterList />
        </div>
    )
}