import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { inWarehouse, requestFromStore, warrantyError } from "../../../dummyData";
import { setCurrentStoreRequest } from "../../../redux/currentStoreRequestSlice";
import "./factoryProcess.css"

export default function FactoryProcess() {
    const dispatch = useDispatch();
    const Button = ({ type }) => {
        return <button className={"status-button " + type}>{type}</button>;
    };
    /**
     * Process
     * 1: store request, 2: Nhập kho, 3: Bảo hành
     */
    const [process, setProcess] = useState(1)

    /**
     * Request
     */
    const requestData = requestFromStore;
    const handleViewDetails = (row) => {
        dispatch(setCurrentStoreRequest(row.id))
    }
    const requestColumns = [
        {
            field: "id", headerName: "No.", width: 50,
            renderCell: (params) => {
                return params.row.id + 1;
            }
        },
        { field: "request", headerName: "Request", width: 150, },
        { field: "receivedAt", headerName: "Received At", width: 200 },
        {
            field: "status", headerName: "Status", width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Button type={params.row.status} />
                        <Link
                            to={"/factory-process/request" + params.row.id}
                            className="view-details"
                            onClick={() => handleViewDetails(params.row)}
                        // onClick={() => handleEdit(params.row)}
                        >View details</Link>
                    </>
                );
            },
        },
    ];

    /**
     * Export
     */
    const inWarehouseData = inWarehouse;
    const inWarehouseColums = [
        {
            field: "id", headerName: "No.", width: 50,
            renderCell: (params) => {
                return params.row.id + 1;
            }
        },
        {
            field: "product", headerName: "Product", width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <img
                            src={params.row.url}
                            alt=""
                            className="widgetLgImg"
                        />
                        <div>{params.row.product}</div>
                    </>
                )
            }
        },
        { field: "code", headerName: "Code", width: 120 },
        { field: "color", headerName: "Color", width: 120 },
        { field: "memory", headerName: "Memory", width: 120 },
        {
            field: "action", headerName: "Action", width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <button
                            className="accept-request"
                        // onClick={() => handleEdit(params.row)}
                        >Accept</button>
                        <button
                            className="refuse-request"
                        // onClick={() => handleEdit(params.row)}
                        >Refuse</button>

                    </>
                );
            },
        },
    ];

    /**
     * warrantyError
     */
    const warrantyErrorData = warrantyError;
    const warrantyErrorColums = [
        {
            field: "id", headerName: "No.", width: 50,
            renderCell: (params) => {
                return params.row.id + 1;
            }
        },
        {
            field: "product", headerName: "Product", width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <img
                            src={params.row.url}
                            alt=""
                            className="widgetLgImg"
                        />
                        <div>{params.row.product}</div>
                    </>
                )
            }
        },
        { field: "code", headerName: "Code", width: 120 },
        { field: "color", headerName: "Color", width: 120 },
        { field: "memory", headerName: "Memory", width: 120 },
        { field: "status", headerName: "Status", width: 120 },
    ];

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
                <DataGrid
                    rows={requestData}
                    disableSelectionOnClick
                    columns={requestColumns}
                    pageSize={100}
                    checkboxSelection
                // onRowClick = {()=> { }}
                />
            </div>

            <div className={process === 2 ? "data-table" : "none-display"}>
                <DataGrid
                    rows={inWarehouseData}
                    disableSelectionOnClick
                    columns={inWarehouseColums}
                    pageSize={100}
                    checkboxSelection
                />
            </div>

            <div className={process === 3 ? "data-table" : "none-display"}>
                <DataGrid
                    rows={warrantyErrorData}
                    disableSelectionOnClick
                    columns={warrantyErrorColums}
                    pageSize={100}
                    checkboxSelection
                />
            </div>
        </div>
    )
}