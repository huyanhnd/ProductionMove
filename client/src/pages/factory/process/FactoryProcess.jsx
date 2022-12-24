import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { inWarehouse, requestFromStore, warrantyError } from "../../../dummyData";
import { setCurrentStoreRequest } from "../../../redux/currentStoreRequestSlice";
import Export from "./export/Export";
import "./factoryProcess.css"
import StoreRequest from "./storeRequest/StoreRequest";
import WarrantyError from "./warrantyError/WarrantyError";

export default function FactoryProcess() {
    const dispatch = useDispatch();
    const Button = ({ type }) => {
        return <button className={"status-button " + type}>{type}</button>;
    };
    /**
     * Process
     * 1: store request, 2: export, 3: Warranty
     */
    const [process, setProcess] = useState(1)

    /**
      * Request
      */
    const requestData = requestFromStore;

    /**
     * Export
     */
    const inWarehouseData = inWarehouse;
    
    /**
     * warrantyError
     */
    const warrantyErrorData = warrantyError;
    

    return (
        <div className="factoryProcess-page">
            <div className="header">
                Process
                <div className="process">
                    <div className="notification">{requestData.length}</div>
                    <div
                        className={process === 1 ? "process-btn" : "process-btn-inactive"}
                        onClick={() => { setProcess(1) }}
                    >Store request</div>
                </div>

                <div className="process">
                    <div className="notification">{inWarehouseData.length}</div>
                    <div
                        className={process === 2 ? "process-btn" : "process-btn-inactive"}
                        onClick={() => { setProcess(2) }}
                    >Export</div>
                </div>

                <div className="process">
                    <div className="notification">{warrantyErrorData.length}</div>
                    <div
                        className={process === 3 ? "process-btn" : "process-btn-inactive"}
                        onClick={() => { setProcess(3) }}
                    >Warranty error</div>
                </div>
            </div>

            <div className={process === 1 ? "data-table" : "none-display"}>
                <StoreRequest />
            </div>

            <div className={process === 2 ? "data-table" : "none-display"}>
                <Export/>
            </div>

            <div className={process === 3 ? "data-table" : "none-display"}>
                <WarrantyError/>
            </div>
        </div>
    )
}