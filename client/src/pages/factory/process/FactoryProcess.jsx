import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { inWarehouse, requestFromStore, warrantyError } from "../../../dummyData";
import "./factoryProcess.css"

export default function FactoryProcess() {
    /**
     * Process
     * 1: request, 2: Nhập kho, 3: Bảo hành
     */
    const [process, setProcess] = useState(1)

    /**
     * Request
     */
    const requestData = requestFromStore;
    const requestColumns = [
        {
            field: "id", headerName: "No.", width: 50,
            renderCell: (params) => {
                return params.row.id + 1;
            }
        },
        {
            field: "productLine", headerName: "Product line", width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <img
                            src={params.row.url}
                            alt=""
                            className="widgetLgImg"
                        />
                        <div>{params.row.productLine}</div>
                    </>
                )
            }
        },
        { field: "color", headerName: "Color", width: 120 },
        { field: "memory", headerName: "Memory", width: 120 },
        { field: "quantity", headerName: "Quantity", width: 120 },
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
     * in Warehouse
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
                    >Request</div>
                </div>

                <div className="process">
                    <div className="notification">{inWarehouseData.length}</div>
                    <div
                        className={process === 2 ? "process-btn" : "process-btn-inactive"}
                        onClick={() => { setProcess(2) }}
                    >In warehouse</div>
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