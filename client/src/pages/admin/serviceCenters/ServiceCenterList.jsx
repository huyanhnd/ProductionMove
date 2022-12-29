import "./serviceCenter.css";
// import { DataContext } from "./Factory";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentServiceCenterInfo } from "../../../redux/currentServiceCenterSlice";
import { getServiceCenter } from "../../../api/serviceCenterApi";

export default function ServiceCenterList() {
  const dispatch = useDispatch();
  useEffect(() => {
    getServiceCenter(dispatch, '00', '000', '0000', '')
  }, [dispatch])
  const serviceCenter = useSelector((state) => state.serviceCenter.serviceCenters);
  const handleDelete = (row) => {
    // setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (row) => {
    dispatch(setCurrentServiceCenterInfo(row))
  };

  const columns = [
    { field: "id", headerName: "No.", width: 50 },
    { field: "name", headerName: "Service Center Name", width: 200 },
    { field: "address", headerName: "Address", width: 450 },
    {
      field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/servicecenters/" + params.row.id}>
              <button
                className="factoryListEdit"
                onClick={() => handleEdit(params.row)}
              >Edit</button>
            </Link>
            {/* <DeleteOutline
              className="factoryListDelete"
              onClick={() => handleDelete(params.row)}
            /> */}
          </>
        );
      },
    },
  ];

  return (
    <DataGrid className="servicecenterList"
      rows={serviceCenter}
      disableSelectionOnClick
      columns={columns}
      pageSize={10}
      checkboxSelection
    />
  );
}
