import FactoryList from "./FactoryList"
import AddressFilter from "../../components/addressFilter/AddressFilter"
import "./factory.css"

export default function Factory() {
    return (
    <div className="factoryPage">
        <AddressFilter />
        <FactoryList />
    </div>
    )
}