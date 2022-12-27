import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { requestFromStore, } from "../../../../dummyData";
import { setCurrentStoreRequest } from "../../../../redux/currentStoreRequestSlice";
import "../factoryProcess.css"

export default function StoreRequest() {
    const dispatch = useDispatch();
    const Button = ({ type }) => {
        return <button className={"status-button " + type}>{type}</button>;
    };
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

                    </>
                );
            },
        },
    ];

    return (
        <DataGrid
            rows={requestData}
            disableSelectionOnClick
            columns={requestColumns}
            pageSize={100}
            checkboxSelection
        // onRowClick = {()=> { }}
        />
    )
}