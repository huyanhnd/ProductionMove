import StoreList from "./StoreList"
import AddressFilter from "../../../components/addressFilter/AddressFilter"
import "./store.css"
import { Link } from "react-router-dom"

export default function Store() {
    return (
        <div className="factoryPage">
            <div className="header">
                <AddressFilter type='Store' />
                <Link to="/stores/addstore" className="add-factory">
                    Add Store
                </Link>
            </div>
            <StoreList />
        </div>
    )
}