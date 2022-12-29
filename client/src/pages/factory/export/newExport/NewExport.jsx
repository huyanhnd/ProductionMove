import { useEffect, useState } from "react";
import "./newExport.css";
import { useDispatch, useSelector } from "react-redux";
import AddFactoryProduct from "../../warehouse/AddFactoryProduct";
import { FormControl, MenuItem, Select } from "@mui/material";
import ExportForm from "./ExportForm";
import { getProductLines } from "../../../../api/productLineApi";
import { getProducts } from "../../../../api/productsApi";
import { DataGrid } from "@mui/x-data-grid";

export default function NewExport() {
  const dispatch = useDispatch();
  const productLines = useSelector((state) => state.productline.productlines);
  const products = useSelector((state) => state.product.products);
  const productAvailable = products.filter((item) => { return item.status == 'InFactory' })
  console.log(productAvailable);
  const [requests, setRequests] = useState([{}]);
  useEffect(() => {
    getProductLines(dispatch);
    getProducts(dispatch);
  }, [dispatch]);

  const columns = [
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
    <div className="newProduct">
      <h1 className="addProductTitle">New Export</h1>
      <div className="addProductForm">
        <div className="productFlex">
          <div className="nameProduct">
            <span className="addTitle">New Export Request To Store</span>
            <div className="productLine-text">
              <div className="addProductItem">
                <label>Product Line</label>

              </div>

              <div className="addProductItem">
                <label>From Factory</label>

              </div>

              <div className="addProductItem">
                <label>To Store</label>

              </div>
            </div>
          </div>
          {/* ------------------- */}
          <div className="detailProduct">
            <div className="addTitle">Request details</div>
            <DataGrid
              rows={productAvailable}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
            />
          </div>
        </div>
      </div>
    </div>
  );
}
