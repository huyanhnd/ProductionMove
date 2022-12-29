import "./factoryProduct.scss";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { getProductsByFactory } from "../../../api/productsApi";
import { getFactory } from "../../../api/factoryApi";
import { getStore } from "../../../api/storesApi";
import { getServiceCenter } from "../../../api/serviceCenterApi";


export default function FactoryProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const factories = useSelector((state) => state.factory.factories);
  const stores = useSelector((state) => state.store.stores);
  const serviceCenters = useSelector((state) => state.serviceCenter.serviceCenters);

  useEffect(() => {
    getProductsByFactory(dispatch, id);
    getFactory(dispatch, '00', '000', '0000', '')
    getStore(dispatch, '00', '000', '0000', '')
    getServiceCenter(dispatch, '00', '000', '0000', '')
  }, [dispatch]);

  const handleDelete = (id) => {
    products.filter((item) => item.id !== id);
  };
  var no = 0;
  const columns = [
    {
      field: "stt", headerName: "No.", width: 50,
      renderCell: () => {
        no++
        return <div>{no}</div>;
      }
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
    // {
    //   field: "factoryId",
    //   headerName: "Cơ sở sản xuất",
    //   width: 150,
    //   renderCell: (params) => {
    //     const factory = factories.find(item => {
    //       return item.id == params.row.factoryId
    //     })
    //     return (
    //       <div>{typeof(factory.name) == 'string' ? factory.name : ''}</div>
    //     );
    //   },
    // },
    {
      field: "serviceCenterId",
      headerName: "Trung tâm bảo hành",
      width: 150,
      renderCell: (params) => {
        const serviceCenter = serviceCenters.find(item => {
          return item.id == params.row.serviceCenterId
        })
        return (
          <div>{typeof(serviceCenter.name) == 'string' ? serviceCenter.name : ''}</div>
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
        rows={products}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
      />
    </div>
  );
}
