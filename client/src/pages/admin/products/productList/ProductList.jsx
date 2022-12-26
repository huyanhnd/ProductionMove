import "./productList.scss";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../api/productsApi";
import { DataGrid } from "@mui/x-data-grid";
import { formatDate } from "../../../../helper/formatDate";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    products.filter((item) => item.id !== id);
  };

  const columns = [
    { field: "code", headerName: "Code", width: 100 },
    {
      field: "productLineId",
      headerName: "Product Line",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
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
      field: "color",
      headerName: "Color",
      width: 120,
    },
    {
      field: "capacity",
      headerName: "Memory",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
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
    <div className="productList">
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
      />
    </div>
  );
}
