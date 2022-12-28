import "./serviceCenterFilter.scss";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../api/productsApi";
import { getFactory } from "../../../api/factoryApi";
import { getStore } from "../../../api/storesApi";
import { getServiceCenter } from "../../../api/serviceCenterApi";
import { getProductLines } from "../../../api/productLineApi";
import { Link } from "react-router-dom";
export default function ServiceCenterFilter() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const factories = useSelector((state) => state.factory.factories);
  const stores = useSelector((state) => state.store.stores);
  const serviceCenters = useSelector(
    (state) => state.serviceCenter.serviceCenters
  );
  const productLines = useSelector((state) => state.productline.productlines);
  const [productData, setProductData] = useState(products);

  useEffect(() => {
    getProducts(dispatch);
    getFactory(dispatch, "00", "000", "0000", "");
    getStore(dispatch, "00", "000", "0000", "");
    getServiceCenter(dispatch, "00", "000", "0000", "");
    getProductLines(dispatch);
  }, []);

  /**
   * productline filter box
   */
  const [productline, setProductline] = useState("0");
  const handleProductlineChange = (e) => {
    setProductline(e.target.value);
  };

  /**
   * factory filter box
   */
  const [factory, setFactory] = useState("0");
  const handleFactoryChange = (e) => {
    setFactory(e.target.value);
  };

  /**
   * store filter box
   */
  const [store, setStore] = useState("0");
  const handleStoreChange = (e) => {
    setStore(e.target.value);
  };

  /**
   * serviceCenter filter box
   */
  const [serviceCenter, setServiceCenter] = useState("0");
  const handleServiceCenterChange = (e) => {
    setServiceCenter(e.target.value);
  };


  /**
   * submit
   */
  const [submit, setSubmit] = useState(true);
  useEffect(() => {
    setProductData(
      products.filter((item, index) => {
        return productline != "0" && item.productLineId == productline;
        // && (color != '0' && item.color == color)
        // && (memory != '0' && item.capacity == memory)
        // && (factory != '0' && item.factoryId == factory)
        // && (store != '0' && item.storeId == store)
        // && (serviceCenter != '0' && item.serviceCenterId == serviceCenter)
      })
    );
    console.log(productData);
  }, [submit]);
  const HandleSubmit = (e) => {
    setSubmit(!submit);
  };

  return (
    <div>
      <div className="factoryFilter">
        {/* productline */}
        <div className="filterSection">
          <div className="filterTitle">Product Line</div>
          <FormControl>
            <Select
              className="filterBox"
              value={productline}
              onChange={handleProductlineChange}
            >
              <MenuItem value={"0"}>
                <em>Tất cả</em>
              </MenuItem>
              {productLines.map((data, index) => {
                return (
                  <MenuItem value={data.id} key={index}>
                    {data.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>

        {/* Cơ sở sản xuất */}
        <div className="filterSection">
          <div className="filterTitle">Cơ sở sản xuất</div>
          <FormControl>
            <Select
              className="filterBox"
              value={factory}
              onChange={handleFactoryChange}
            >
              <MenuItem value={"0"}>
                <em>Tất cả</em>
              </MenuItem>
              {factories.map((data, index) => {
                return (
                  <MenuItem value={data.id} key={index}>
                    {data.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>

        {/* Cửa hàng */}
        <div className="filterSection">
          <div className="filterTitle">Cửa hàng</div>
          <FormControl>
            <Select
              className="filterBox"
              value={store}
              onChange={handleStoreChange}
            >
              <MenuItem value={"0"}>
                <em>Tất cả</em>
              </MenuItem>
              {stores.map((data, index) => {
                return (
                  <MenuItem value={data.id} key={index}>
                    {data.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>

        {/* <div className="filterSection">
          <div className="filterTitle">Trung tâm bảo hành</div>
          <FormControl>
            <Select
              className="filterBox"
              value={serviceCenter}
              onChange={handleServiceCenterChange}
            >
              <MenuItem value={"0"}>
                <em>Tất cả</em>
              </MenuItem>
              {serviceCenters.map((data, index) => {
                return (
                  <MenuItem value={data.id} key={index}>
                    {data.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div> */}

        {/* Tên nhà máy */}
        {/* <div className="filterSection ">
          <div className="filterTitle">Factory name</div>
          <input type="text" placeholder="Type factory name here" id="filterInputBox" onChange={handeInputChange} value={factoryName} />
        </div> */}
        <div className="filterSection">
          <br />
          <div id="submit-btn" onClick={HandleSubmit}>
            Submit
          </div>
        </div>
        <Link
          to="/servicecenters_products/addproducts"
          className="linkServiceCenter"
        >
          Add Product
        </Link>
      </div>
    </div>
  );
}
