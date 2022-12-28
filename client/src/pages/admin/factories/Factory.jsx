import FactoryList from "./FactoryList"
import AddressFilter from "../../../components/addressFilter/AddressFilter"
import "./factory.css"
import { Link } from "react-router-dom"

export default function Factory() {
    return (
        <div className="factoryPage">
            <div className="header">
                <AddressFilter type='Factory'/>
                <div className="range"></div>
                <Link to="/factories/addfactory" className="add-factory">
                    Add Factory
                </Link>
            </div>
            <FactoryList />
        </div>
    )
}