import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { inWarehouse, requestFromStore, warrantyError } from "../../../dummyData";
import "./servicecenterProcess.css"

export default function ServiceCenterProcess() {

    const [process, setProcess] = useState(1)


    /**
     * In Warranty
     */
    const requestData = inWarehouse;
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
                        <div>{params.row.product}</div>
                    </>
                )
            }
        },
        { field: "code", headerName: "Code", width: 120 },
        { field: "color", headerName: "Color", width: 120 },
        { field: "memory", headerName: "Memory", width: 120 },
        // { field: "quantity", headerName: "Quantity", width: 120 },
        {
            field: "action", headerName: "Action", width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <button
                            className="accept-request"
                        // onClick={() => handleEdit(params.row)}
                        >Warranted</button>
                        <button
                            className="refuse-request"
                        // onClick={() => handleEdit(params.row)}
                        >Error</button>

                    </>
                );
            },
        },
    ];

    /**
     * Warranted
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
        // {
        //     field: "action", headerName: "Action", width: 150,
        //     renderCell: (params) => {
        //         return (
        //             <>
        //                 <button
        //                     className="accept-request"
        //                 // onClick={() => handleEdit(params.row)}
        //                 >Accept</button>
        //                 <button
        //                     className="refuse-request"
        //                 // onClick={() => handleEdit(params.row)}
        //                 >Refuse</button>

        //             </>
        //         );
        //     },
        // },
    ];

    /**
     * Error
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
        // {
        //     field: "action", headerName: "Action", width: 150,
        //     renderCell: (params) => {
        //         return (
        //             <>
        //                 <button
        //                     className="accept-request"
        //                 // onClick={() => handleEdit(params.row)}
        //                 >Accept</button>
        //                 <button
        //                     className="refuse-request"
        //                 // onClick={() => handleEdit(params.row)}
        //                 >Refuse</button>

        //             </>
        //         );
        //     },
        // },
    ];

    return (
        <div className="factoryProcess-page">
            <div className="process">
                <div className="notification">{requestData.length}</div>
                <div
                    className={process == 1 ? "process-btn" : "process-btn-inactive"}
                    onClick={() => { setProcess(1) }}
                >In Warranty</div>
            </div>

            <div className="process">
                <div className="notification">{inWarehouseData.length}</div>
                <div
                    className={process == 2 ? "process-btn" : "process-btn-inactive"}
                    onClick={() => { setProcess(2) }}
                >Warranted</div>
            </div>

            <div className="process">
                <div className="notification">{warrantyErrorData.length}</div>
                <div
                    className={process == 3 ? "process-btn" : "process-btn-inactive"}
                    onClick={() => { setProcess(3) }}
                >Error</div>
            </div>

            <DataGrid
                className={process == 1 ? "" : "none-display"}
                rows={requestData}
                disableSelectionOnClick
                columns={requestColumns}
                pageSize={10}
                checkboxSelection
            />

            <DataGrid
                className={process == 2 ? "" : "none-display"}
                rows={inWarehouseData}
                disableSelectionOnClick
                columns={inWarehouseColums}
                pageSize={10}
                checkboxSelection
            />

            <DataGrid
                className={process == 3 ? "" : "none-display"}
                rows={warrantyErrorData}
                disableSelectionOnClick
                columns={warrantyErrorColums}
                pageSize={10}
                checkboxSelection
            />

        </div>
    )
}