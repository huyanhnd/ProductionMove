import "./exportList.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProcesses } from "../../../../api/processApi";
import { deleteUser } from "../../../../api/userApi";
import { formatDate } from "../../../../helper/formatDate";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

import { Tabs, Tab } from '@mui/material';

export default function ExportList() {
  const dispatch = useDispatch();
  const processes = useSelector((state) => state.process.processes);
  const [value, setValue] = useState(0)

  useEffect(() => {
    getProcesses(dispatch);
  }, [dispatch]);

  const handleViewDetails = (row) => {
    return null;
  }

  const handleTabs = (e, val) => {
    setValue(val)
  }

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: "id", headerName: "Id", width: 50 },
    { field: "name", headerName: "Username", width: 90 },
    { field: "role", headerName: "Store", width: 90 },
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
      headerName: "Update At",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="">{params.row.approvedDate === null ? "Undefine" : formatDate(params.row.approvedDate)}</div>
        );
      },
    },
    {
      field: "cancelledDate",
      headerName: "Update At",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="">{params.row.cancelledDate === null ? "Undefine" : formatDate(params.row.cancelledDate)}</div>
        );
      },
    },
    {
      field: "status",
      headerName: "FullName",
      width: 200,
      renderCell: (params) => {
        return (
          <span className={`status ${params.row.status}`}>{params.row.status}</span>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
            <Link
              to={"/factory/process/" + params.row.id}
              className="view-details"
              onClick={() => handleViewDetails(params.row)}
            >
              View details
            </Link>
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

      <DataGrid
        rows={processes}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
      />

      <Tabs value={value} onChange={handleTabs}>
        <Tab label="All" />
        <Tab label="Approved" />
        <Tab label="Pending" />
        <Tab label="Cancelled" />
      </Tabs>

      <TabPanel value={value} index={0}>
      </TabPanel>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div>{value === index && (<h1>{children}</h1>)}</div>
  )
}