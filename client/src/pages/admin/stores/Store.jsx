import StoreList from "./StoreList"
import AddressFilter from "../../../components/addressFilter/AddressFilter"
import "./store.css"
import { Link } from "react-router-dom"

export default function Store() {
    return (
        <div className="storePage">
            <div className="header">
                <AddressFilter type='Store' />
                <div className="range"></div>
                <Link to="/stores/addstore" className="add-store">
                    Add Store
                </Link>
            </div>
            <StoreList />
        </div>
    )
}