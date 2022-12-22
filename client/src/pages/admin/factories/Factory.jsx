import FactoryList from "./FactoryList"
import AddressFilter from "../../../components/addressFilter/AddressFilter"
import "./factory.css"

export default function Factory() {
    return (
    <div className="factoryPage">
        <div className="header">
        <AddressFilter />
        <div className="request-container">
        <div className="notification">56</div>
        <div id="request-btn">Request</div>
        </div>
        </div>
        <FactoryList />
    </div>
    )
}