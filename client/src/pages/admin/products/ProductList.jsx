import "./productList.css";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { formatDate } from "../../../helper/formatDate";
import { getProducts, getProductsAdmin } from "../../../api/productsApi";
import { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { getFactory } from "../../../api/factoryApi";
import { getStore } from "../../../api/storesApi";
import { getServiceCenter } from "../../../api/serviceCenterApi";
import { getProductLines } from "../../../api/productLineApi";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const factories = useSelector((state) => state.factory.factories);
  const stores = useSelector((state) => state.store.stores);
  const serviceCenters = useSelector((state) => state.serviceCenter.serviceCenters);

  const productLines = useSelector((state) => state.productline.productlines);
  const [productline, setProductline] = useState('0')
  const [factory, setFactory] = useState('0')
  const [store, setStore] = useState('0')
  const [serviceCenter, setServiceCenter] = useState('0')

  useEffect(() => {
    getFactory(dispatch, '00', '000', '0000', '')
    getStore(dispatch, '00', '000', '0000', '')
    getServiceCenter(dispatch, '00', '000', '0000', '')
    getProductLines(dispatch)
  }, [dispatch]);

  useEffect(() => {
    getProductsAdmin(dispatch, productline, factory, store, serviceCenter);
  }, [dispatch, productline, factory, store, serviceCenter])
  console.log(products);
  /**
   * productline filter box
  */
  const handleProductlineChange = (e) => {
    setProductline(e.target.value)
  }
  /*
  * factory filter box
  */
  const handleFactoryChange = (e) => {
    setFactory(e.target.value)
  }

  /**
* store filter box
*/
  const handleStoreChange = (e) => {
    setStore(e.target.value)
  }

  /**
 * serviceCenter filter box
 */
  const handleServiceCenterChange = (e) => {
    setServiceCenter(e.target.value)
  }

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
    <>
      <div className="factoryFilter">
        {/* productline */}
        <div className="filterSection">
          <div className="filterTitle">Product Line</div>
          <FormControl >
            <Select className="filterBox"
              value={productline}
              onChange={handleProductlineChange}
            >
              <MenuItem value={"0"}>
                <em>Tất cả</em>
              </MenuItem>
              {productLines.map((data, index) => {
                return <MenuItem value={data.id} key={index}>{data.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>

        {/* Cơ sở sản xuất */}
        <div className="filterSection">
          <div className="filterTitle">Cơ sở sản xuất</div>
          <FormControl >
            <Select className="filterBox"
              value={factory}
              onChange={handleFactoryChange}
            >
              <MenuItem value={"0"}>
                <em>Tất cả</em>
              </MenuItem>
              {factories.map((data, index) => {
                return <MenuItem value={data.id} key={index}>{data.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>

        {/* Cơ sở cửa hàng */}
        <div className="filterSection">
          <div className="filterTitle">Cửa hàng</div>
          <FormControl >
            <Select className="filterBox"
              value={store}
              onChange={handleStoreChange}
            >
              <MenuItem value={"0"}>
                <em>Tất cả</em>
              </MenuItem>
              {stores.map((data, index) => {
                return <MenuItem value={data.id} key={index}>{data.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>

        {/* Cơ sở cửa hàng */}
        <div className="filterSection">
          <div className="filterTitle">Trung tâm bảo hành</div>
          <FormControl >
            <Select className="filterBox"
              value={serviceCenter}
              onChange={handleServiceCenterChange}
            >
              <MenuItem value={"0"}>
                <em>Tất cả</em>
              </MenuItem>
              {serviceCenters.map((data, index) => {
                return <MenuItem value={data.id} key={index}>{data.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>

        <div className="filterSection">
          <div className="filterTitle">Trạng thái </div>
          <FormControl >
            <Select className="filterBox"
              value={serviceCenter}
              onChange={handleServiceCenterChange}
            >
              <MenuItem value={"0"}>
                <em>Tất cả</em>
              </MenuItem>
              {serviceCenters.map((data, index) => {
                return <MenuItem value={data.id} key={index}>{data.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>
        
      </div>

      


      <div className="productList">
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );
}