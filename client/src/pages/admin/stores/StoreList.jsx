import "./store.css";
// import { DataContext } from "./Factory";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStoreInfo } from "../../../redux/currentStoreSlice";
import { getStore } from "../../../api/storesApi";

export default function StoreList() {
  const dispatch = useDispatch();
  useEffect(() => {
    getStore(dispatch, '00', '000', '0000', '')
  }, [dispatch])
  const store = useSelector((state) => state.store.stores);
  const handleDelete = (row) => {
    // setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (row) => {
    dispatch(setCurrentStoreInfo(row))
  };

  const columns = [
    { field: "id", headerName: "No.", width: 50 },
    { field: "name", headerName: "Store Name", width: 200 },
    { field: "address", headerName: "Address", width: 450 },
    {
      field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/stores/" + params.row.id}>
              <button
                className="factoryListEdit"
                onClick={() => handleEdit(params.row)}
              >Edit</button>
            </Link>
            <DeleteOutline
              className="factoryListDelete"
              onClick={() => handleDelete(params.row)}
            />
          </>
        );
      },
    },
  ];

  return (
    <DataGrid
      rows={store}
      disableSelectionOnClick
      columns={columns}
      pageSize={100}
      checkboxSelection
    />
  );
}
