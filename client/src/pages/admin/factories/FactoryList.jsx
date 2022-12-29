import "./factory.css";
import { DataContext } from "./Factory";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentFactoryInfo } from "../../../redux/currentFactorySlice";
import { getFactory } from "../../../api/factoryApi";

export default function FactoryList() {
  const dispatch = useDispatch();
  useEffect(() => {
    getFactory(dispatch, '00', '000', '0000', '')
  }, [dispatch])
  const factory = useSelector((state) => state.factory.factories);

  const handleDelete = (row) => {
    // setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (row) => {
    dispatch(setCurrentFactoryInfo(row))
  };

  const columns = [
    { field: "id", headerName: "No.", width: 50 },
    { field: "name", headerName: "Factory Name", width: 200 },
    { field: "address", headerName: "Address", width: 450 },
    {
      field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/factories/" + params.row.id}>
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
    <DataGrid
      rows={factory}
      disableSelectionOnClick
      columns={columns}
      pageSize={10}
      checkboxSelection
      autoHeight
    />
  );
}
