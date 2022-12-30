import "./storeImport.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProcesses } from "../../../api/processApi";
import { deleteUser } from "../../../api/userApi";
import { formatDate } from "../../../helper/formatDate";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Tabs, Tab } from '@mui/material';
import { publicRequest } from "../../../api/requestMethods";
import { changeImportRequest } from "../../../redux/processSlice";

export default function StoreImport() {
  const dispatch = useDispatch();
  const processes = useSelector((state) => state.process.processes);
  const [value, setValue] = useState(0)
  const importRequest = useSelector((state) => state.process.importRequest)
  const [submit, setSubmit] = useState(true)

  useEffect(() => {
    getProcesses(dispatch);
  }, [dispatch]);

  const handleTabs = (e, val) => {
    setValue(val)
  }
  const handleSubmit = async (processId) => {
    await publicRequest.put(
      `/Product/import/?processId=${processId}`
    );
    setSubmit(!submit)
  }

  const columns = [
    { field: "id", headerName: "Id", width: 50 },
    { field: "name", headerName: "Username", width: 90 },
    { field: "role", headerName: "From Factory", width: 120 },
    {
      field: "requiredDate",
      headerName: "Create At",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="">{formatDate(params.row.requiredDate)}</div>
        );
      },
    },
    {
      field: "approvedDate",
      headerName: "Update At",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="">{params.row.approvedDate === null ? "Undefine" : formatDate(params.row.approvedDate)}</div>
        );
      },
    },
    {
      field: "cancelledDate",
      headerName: "Update At",
      width: 150,
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
  ];

  return (
    <div className="exportList">
      <div className="datatableTitle">
        Import Request
        <button className="linkAddProduct" onClick={() => { handleSubmit(importRequest[0]) }}>Submit</button>
      </div>

      <DataGrid
        rows={processes}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        checkboxSelection
        onSelectionModelChange={(rows) => dispatch(changeImportRequest(rows))}
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