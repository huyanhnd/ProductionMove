import "./productList.scss";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../api/productsApi";
import { DataGrid } from "@mui/x-data-grid";
import { formatDate } from "../../../helper/formatDate";
import { getFactory } from "../../../api/factoryApi";
import { getStore } from "../../../api/storesApi";
import { getServiceCenter } from "../../../api/serviceCenterApi";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const factories = useSelector((state) => state.factory.factories);
  const stores = useSelector((state) => state.store.stores);
  const serviceCenters = useSelector((state) => state.serviceCenter.serviceCenters);

  // useEffect(() => {
  //   getProducts(dispatch);
  //   getFactory(dispatch, '00', '000', '0000', '')
  //   getStore(dispatch, '00', '000', '0000', '')
  //   getServiceCenter(dispatch, '00', '000', '0000', '')
  // }, [dispatch]);

  const handleDelete = (id) => {
    products.filter((item) => item.id !== id);
  };

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
    <div className="productList">
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
}
