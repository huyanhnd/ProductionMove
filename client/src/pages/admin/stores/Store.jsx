import StoreList from "./StoreList"
import AddressFilter from "../../components/addressFilter/AddressFilter"
import "./store.css"

export default function Store() {
    return (
    <div className="factoryPage">
        <AddressFilter />
        <StoreList />
    </div>
    )
}