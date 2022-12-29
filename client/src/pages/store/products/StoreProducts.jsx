import "./storeProducts.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { getProductStore } from "../../../api/productsApi";

export default function StoreProducts() {
  const dispatch = useDispatch();
  const productStore = useSelector((state) => state.product.productStore)
  const [status, setStatus] = useState();

  useEffect(() => {
    getProductStore(dispatch, 3, "InFactory")
  }, [dispatch]);

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 50,
    },
    {
      field: "name",
      headerName: "Product Line",
      width: 150,
    },
    {
      field: "capacity",
      headerName: "Memory",
      width: 100,
    },
    {
      field: "color",
      headerName: "Color",
      width: 100,
    },
    { field: "code", headerName: "Code", width: 120 },
    {
      field: "manufactureDate",
      headerName: "Ngày sản xuất",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            {params.row.manufactureDate}
          </div>
        );
      },
    },
    {
      field: "warrantyPeriod",
      headerName: "Warranty Period",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <span className={`status ${params.row.status}`}>{params.row.status}</span>
        );
      },
    },
  ];

  return (
    <div className="table">
      <DataGrid
        rows={productStore}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
      />
    </div>
  );
}
