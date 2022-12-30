import "./serviceCenterRequest.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProcesses } from "../../../api/processApi";
import { deleteUser } from "../../../api/userApi";
import { formatDate } from "../../../helper/formatDate";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Tabs, Tab } from '@mui/material';

export default function ServiceCenterRequest() {
    const dispatch = useDispatch();
    const processes = useSelector((state) => state.process.processes);
    const [value, setValue] = useState(0)

    useEffect(() => {
        getProcesses(dispatch);
    }, [dispatch]);

    const handleViewDetails = (row) => {
        return null;
    }
    const[process_,setProcess_]=useState(processes)
    const handleDelete = (id) => {
        setProcess_(process_.filter((item) => item.id !== id));
      };

    const handleTabs = (e, val) => {
        setValue(val)
    }

    const columns = [
        { field: "id", headerName: "Id", width: 50 },
        { field: "store", headerName: "From Store", width: 120 },
        { field: "product", headerName: "Product Code", width: 120 },
        {
            field: "requiredDate",
            headerName: "Create At",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="">{formatDate(params.row.requiredDate)}</div>
                );
            },
        },
        {
            field: "approvedDate",
            headerName: "Accept At",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="">{params.row.approvedDate === null ? "Undefine" : formatDate(params.row.approvedDate)}</div>
                );
            },
        },
        {
            field: "cancelledDate",
            headerName: "Reject At",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="">{params.row.cancelledDate === null ? "Undefine" : formatDate(params.row.cancelledDate)}</div>
                );
            },
        },
        {
            field: "status",
            headerName: "Status",
            width: 200,
            renderCell: (params) => {
                return (
                    <span className={`status ${params.row.status}`}>{params.row.status}</span>
                );
            },
        },
        { field: "name", headerName: "Note", width: 90 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div onClick={() => handleDelete(params.row.id)}>
                        <button
               
                            className="accept-btn"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Accept
                        </button>
                        <button
               
                            className="reject-btn"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Reject
                        </button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="exportList">
            <div className="datatableTitle">
                Export Request
                <Link to="/factory/newexport" className="linkAddProduct">
                    New Export
                </Link>
            </div>


            <Tabs value={value} onChange={handleTabs}>
                <Tab label="All" />
                <Tab label="Approved" />
                <Tab label="Pending" />
                <Tab label="Cancelled" />
            </Tabs>

            <TabPanel value={value} index={0}>
            </TabPanel>

            <DataGrid
                rows={process_}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                checkboxSelection
                autoHeight
            />
        </div>
    );
};

function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <div>{value === index && (<h1>{children}</h1>)}</div>
    )
}