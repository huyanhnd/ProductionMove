import { DataGrid } from "@mui/x-data-grid";
import { inWarehouse, } from "../../../../dummyData";
import "../factoryProcess.css"

export default function Export() {
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

    return (
        <DataGrid
            rows={inWarehouseData}
            disableSelectionOnClick
            columns={inWarehouseColums}
            pageSize={100}
            checkboxSelection
        />
    )
}

