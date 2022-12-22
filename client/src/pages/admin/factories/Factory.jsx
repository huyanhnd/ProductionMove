import FactoryList from "./FactoryList"
import AddressFilter from "../../../components/addressFilter/AddressFilter"
import "./factory.css"

export default function Factory() {
    return (
    <div className="factoryPage">
        <div className="header">
        <AddressFilter />
        </div>
        <FactoryList />
    </div>
    )
}