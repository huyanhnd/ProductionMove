import "./factoryProduct.scss";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { getProducts, getProductsByFactory, getProductWarehouse } from "../../../api/productsApi";
import { getFactory } from "../../../api/factoryApi";
import { getStore } from "../../../api/storesApi";
import { getServiceCenter } from "../../../api/serviceCenterApi";
import { getProductLines } from "../../../api/productLineApi";
import { publicRequest } from "../../../api/requestMethods";
import { getUsers } from "../../../api/userApi";
import { FormControl, MenuItem, Select } from "@mui/material";


export default function FactoryProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const stores = useSelector((state) => state.store.stores);
  const serviceCenters = useSelector((state) => state.serviceCenter.serviceCenters);
  const productLines = useSelector((state) => state.productline.productlines);
  const [color, setColor] = useState('All')
  const [memory, setMemory] = useState('0')
  const [status, setStatus] = useState('All')
  //factory id là curent user
  const currentUser = useSelector((state) => state.auth.currentUser)
  const currentUserId = currentUser.managementId

  useEffect(() => {
    getFactory(dispatch, '00', '000', '0000', '')
    getStore(dispatch, '00', '000', '0000', '')
    getServiceCenter(dispatch, '00', '000', '0000', '')
    getProductLines(dispatch)
    // getUsers(dispatch)
  }, [dispatch]);

  const handleDelete = (id) => {
    products.filter((item) => item.id !== id);
  };

  /**
  * productline filter box
 */
  const [productline, setProductline] = useState('0')
  const handleProductlineChange = (e) => {
    setProductline(e.target.value)
  }

  /**
   * factory filter box
  */
  const [factory, setFactory] = useState('0')
  const handleFactoryChange = (e) => {
    setFactory(e.target.value)
  }

  /**
   * store filter box
  */
  const [store, setStore] = useState('0')
  const handleStoreChange = (e) => {
    setStore(e.target.value)
  }

  /**
   * serviceCenter filter box
  */
  const [serviceCenter, setServiceCenter] = useState('0')
  const handleServiceCenterChange = (e) => {
    setServiceCenter(e.target.value)
  }

  const statuses = ['InFactory', 'InStore', 'Sold', 'InWarranty', 'Warranted', 'Error', 'OutOfWarranty']
  const handleStatusChange = (e) => {
    setStatus(e.target.value)
  }

  const memories = ['64GB', '128GB', '256GB', '512GB', '1TB']
  const handleMemoryChange = (e) => {
    setMemory(e.target.value)
  }
  //  color
  const colors = ['Black', "White", 'Gold',"Blue","White","Gray"]
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  useEffect(() => {
    getProductWarehouse(dispatch, productline, currentUserId, store, serviceCenter, status, color, memory)
    console.log(products);
  }, [dispatch, productline, currentUser, store, serviceCenter, status, color, memory])

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
      field: "serviceCenterId",
      headerName: "Trung tâm bảo hành",
      width: 150,
      renderCell: (params) => {
        return (
          <div>{params.row.serviceCenterName}</div>
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

        {/* Màu sắc */}
        <div className="filterSection">
          <div className="filterTitle">Color</div>
          <FormControl >
            <Select className="filterBox"
              value={color}
              onChange={handleColorChange}
              defaultValue="All"
            >
              <MenuItem value="All">
                <em>Tất cả</em>
              </MenuItem>
              {colors.map((data, index) => {
                return <MenuItem value={data} key={index}>{data}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>

        {/* Màu sắc */}
        <div className="filterSection">
          <div className="filterTitle">Status</div>
          <FormControl >
            <Select className="filterBox"
              value={status}
              onChange={handleStatusChange}
              defaultValue="All"
            >
              <MenuItem value="All">
                <em>Tất cả</em>
              </MenuItem>
              {statuses.map((data, index) => {
                return <MenuItem value={data} key={index}>{data}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>

        {/* Bộ nhớ */}
        <div className="filterSection">
          <div className="filterTitle">Memory</div>
          <FormControl >
            <Select className="filterBox"
              value={memory}
              onChange={handleMemoryChange}
              defaultValue='0'
            >
              <MenuItem value='0'>
                <em>Tất cả</em>
              </MenuItem>
              {memories.map((data, index) => {
                return <MenuItem value={data} key={index}>{data}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>


      </div>
      <div className="table">
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          checkboxSelection
        />
      </div>
    </>
  );
}
