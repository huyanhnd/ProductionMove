import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "../../redux/apiCalls";
import { useEffect, useState } from "react";

export default function Series() {
    const dispatch = useDispatch();
    const series = useSelector((state) => state.series.series);

    useEffect(() => {
        getSeries(dispatch);
    }, [dispatch]);

    const columns = [
        {   
            field: "id", 
            headerName: "ID", 
            width: 90 
        },
        {
            field: "name",
            headerName: "Name",
            width: 300,
        },
    ];

    return (
        <div className="productList">
            <DataGrid
                rows={series}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                checkboxSelection
            />
        </div>
    );
}
