import { FormControl, MenuItem, Select } from "@mui/material"
import { createContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getProductLines } from "../../../api/productLineApi";
import Request from "./Request";
import "./storeRequestProduct.css"

export const SendContext = createContext()

export default function StoreRequestProduct() {
    const [requestIndex, setRequestIndex] = useState(1)
    const [requestList, setRequestList] = useState([])

    /**
     * requestList
     */
    const handleAdd = (e) => {
        setRequestList([...requestList, {}])
    }
    return (
        <div className="requestProduct-page">
            <div className="requestProductTitle">Request to import products from the factory</div>
            {/* <SendContext.Provider value={ [requestIndex, setRequestIndex, requestList, setRequestList]}> */}
                <Request />
                {requestList.map(item => {
                    return <Request />
                })}
            {/* </SendContext.Provider> */}
            <div className="button">
                <button className="add" onClick={handleAdd}>+</button>
                <button className="requestProductButton">Send Request</button>
            </div>
        </div>
    )
}