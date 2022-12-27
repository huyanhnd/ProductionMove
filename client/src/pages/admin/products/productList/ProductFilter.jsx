import "./productFilter.scss";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect, createContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getFactory } from "../../../../api/factoryApi";
import { getDistrict, getProvince, getWard } from "../../../../api/addressApi";
import { getProductLines } from "../../../../api/productLineApi";
import { getProducts } from "../../../../api/productsApi";
import { getStore } from "../../../../api/storesApi";
import { getServiceCenter } from "../../../../api/serviceCenterApi";

export default function ProductFilter() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const factories = useSelector((state) => state.factory.factories);
  const stores = useSelector((state) => state.store.stores);
  const serviceCenters = useSelector((state) => state.serviceCenter.serviceCenters);
  const productLines = useSelector((state) => state.productline.productlines);
  const [productData, setProductData] = useState(products)

  useEffect(() => {
    getProducts(dispatch);
    getFactory(dispatch, '00', '000', '0000', '')
    getStore(dispatch, '00', '000', '0000', '')
    getServiceCenter(dispatch, '00', '000', '0000', '')
    getProductLines(dispatch)
  }, []);

  /**
   * productline filter box
  */
  const [productline, setProductline] = useState('0')
  const handleProductlineChange = (e) => {
    setProductline(e.target.value)
  }

  /**
 * memory filter box
*/
  const [memory, setMemory] = useState('0')
  const handleMemoryChange = (e) => {
    setMemory(e.target.value)
  }

  /**
* color filter box
*/
  const [color, setColor] = useState('0')
  const handleColorChange = (e) => {
    setColor(e.target.value)
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

  /**
   * submit
  */
  const [submit, setSubmit] = useState(true)
  useEffect(() => {
    console.log(productline, memory,
      color,
      factory,
      store,
      serviceCenter,);
    console.log(products);
    setProductData(products.filter((item, index) => {
      return (productline != '0' && item.productLineId == productline)
        // && (color != '0' && item.color == color)
        // && (memory != '0' && item.capacity == memory)
        // && (factory != '0' && item.factoryId == factory)
        // && (store != '0' && item.storeId == store)
        // && (serviceCenter != '0' && item.serviceCenterId == serviceCenter)
    }))
    console.log(productData);
}
    , [submit]);
const HandleSubmit = (e) => {
  setSubmit(!submit)
}

return (
  <div >
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

      {/* memory */}
      <div className="filterSection">
        <div className="filterTitle">Memory</div>
        <FormControl >
          <Select className="filterBox"
            value={memory}
            onChange={handleMemoryChange}
          >
            <MenuItem value={"0"}>
              <em>Tất cả</em>
            </MenuItem>
            {products.map((data, index) => {
              return <MenuItem value={data.capacity} key={index}>{data.capacity}</MenuItem>
            })}
          </Select>
        </FormControl>
      </div>

      {/* Color */}
      <div className="filterSection">
        <div className="filterTitle">Color</div>
        <FormControl >
          <Select className="filterBox"
            value={color}
            onChange={handleColorChange}
          >
            <MenuItem value={"0"}>
              <em>Tất cả</em>
            </MenuItem>
            {products.map((data, index) => {
              return <MenuItem value={data.color} key={index}>{data.color}</MenuItem>
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

      {/* Tên nhà máy */}
      {/* <div className="filterSection ">
          <div className="filterTitle">Factory name</div>
          <input type="text" placeholder="Type factory name here" id="filterInputBox" onChange={handeInputChange} value={factoryName} />
        </div> */}
      <div className="filterSection">
        <br />
        <div
          id="submit-btn"
          onClick={HandleSubmit}
        >Submit</div>
      </div>
    </div>
  </div>
);
}


