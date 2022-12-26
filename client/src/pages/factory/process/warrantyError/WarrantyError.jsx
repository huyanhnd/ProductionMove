import { DataGrid } from "@mui/x-data-grid";
import { warrantyError, } from "../../../../dummyData";
import "../factoryProcess.css"

export default function WarrantyError() {
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
        <DataGrid
                    rows={warrantyErrorData}
                    disableSelectionOnClick
                    columns={warrantyErrorColums}
                    pageSize={100}
                    checkboxSelection
                />
    )
}