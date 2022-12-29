import "./errorList.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProcesses } from "../../../api/processApi";
import { deleteUser } from "../../../api/userApi";
import { formatDate } from "../../../helper/formatDate";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Tabs, Tab } from '@mui/material';
import { getFactoryProductError } from "../../../api/productsApi";

export default function ErrorList() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const errorProducts = useSelector((state) => state.product.errorProducts);

  useEffect(() => {
    getFactoryProductError(dispatch, currentUser.managementId)
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "Id", width: 50, },
    { field: "code", headerName: "Code", width: 120 },
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
    {
      field: "price",
      headerName: "Price",
      width: 100,
      renderCell: (param) => {
        return <div>${param.row.price}</div>
      }
    },

    {
      field: "factoryId",
      headerName: "Cơ sở sản xuất",
      width: 150,
      renderCell: (params) => {
        return (
          params.row.factoryName
        );
      },
    },
    {
      field: "storeId",
      headerName: "Cửa hàng",
      width: 150,
      renderCell: (params) => {
        return (
          params.row.storeName
        );
      },
    },
    {
      field: "serviceCenterId",
      headerName: "Trung tâm bảo hành",
      width: 150,
      renderCell: (params) => {
        return (
          params.row.serviceCenterName
        );
      },
    },
    {
      field: "manufactureDate",
      headerName: "Ngày sản xuất",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            {formatDate(params.row.manufactureDate)}
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
    <div className="exportList">
      <div className="datatableTitle">
        Error Product
      </div>
      <DataGrid
        rows={errorProducts}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
      />
    </div>
  );
}