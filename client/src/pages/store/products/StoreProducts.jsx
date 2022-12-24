import "./storeProducts.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByStore } from "../../../api/productsApi";
import { getProductLineByCode, getProductLineById, getProductLines } from "../../../api/productLineApi";

const StoreProducts = () => {
  const store = useSelector((state) => state.auth.currentUser.username);
  const storeID = store[store.length-1]
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsByStore(dispatch, storeID);
  }, [dispatch]);
  const products = useSelector((state) => state.product.products);
  
  // const GetProductLineById = (Id) => {
  //   getProductLineById(dispatch,Id)
  //   const productName = useSelector((state) => state.productline.productlineById)
  //   console.log('prd: ', productName);
  //   return productName.name;
  // }
  const Button = ({ type }) => {
    return <button className={"status-button " + type}>{type}</button>;
  };
  const columns = [
    { field: "id", headerName: "No.", width: 70 },
    { field: "name", headerName: "Name", width: 140,
  renderCell: (params) => {
    return (
      "Thinh dep trai"
    )
  } },
    { field: "capacity", headerName: "Memory", width: 70,
    renderCell: (params) => {
      return (
        params.row.capacity + " GB"
      )
    } 
  },
    { field: "color", headerName: "Color", width: 100 },
    { field: "code", headerName: "Serial Number", width: 120 },
    { field: "manufactureDate", headerName: "Manufacture Date", width: 160 },
    { field: "warrantyPeriod", headerName: "Warranty Period", width: 120 },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return <Button type={params.row.status} />;
      },
    },
  ];
  
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Products
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <Link to="/users/new" className="link">
          Add Product
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={products}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default StoreProducts;
