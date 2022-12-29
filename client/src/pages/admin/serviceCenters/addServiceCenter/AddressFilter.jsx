import "./addressFilter.css";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect, createContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDistrict, getProvince, getWard } from "../../../../api/addressApi";


export default function AddressFilter({ type }) {
  const dispatch = useDispatch();
  useEffect(() => {
    getProvince(dispatch);
  }, [dispatch]);

  /**
   * Province filter box
  */
  const province = useSelector((state) => state.address.province);
  // const provinceCode = useSelector((state) => state.address.provinceCode)
  const [provinceCode, setProvinceCode] = useState('00')
  const handleProvinceCodeChange = (e) => {
    setProvinceCode(e.target.value)
    setDistrictCode('000')
    setWardCode('0000')
    setTypeSelect('')
  }

  /**
   * District filter box
  */
  useEffect(() => {
    getDistrict(dispatch, provinceCode);
  }, [provinceCode])
  const district = useSelector((state) => state.address.district);
  // const districtCode = useSelector((state) => state.address.districtCode)
  const [districtCode, setDistrictCode] = useState('000')
  const handleDistrictCodeChange = (e) => {
    setDistrictCode(e.target.value)
    setWardCode('0000')
    setTypeSelect('')
  }

  /**
   * Ward filter box
  */
  useEffect(() => {
    getWard(dispatch, districtCode);
  }, [districtCode])
  const ward = useSelector((state) => state.address.ward);
  // const wardCode = useSelector((state) => state.address.wardCode)
  const [wardCode, setWardCode] = useState('0000')
  const handleWardCodeChange = (e) => {
    setWardCode(e.target.value)
    setTypeSelect('')
  }

  /**
   *  name filter box
  */
  var typeInput = []
  const factories = useSelector((state) => state.factory.factories);
  const stores = useSelector((state) => state.store.stores);
  const serviceCenters = useSelector((state) => state.serviceCenter.serviceCenters);
  if (type == 'Factory') {
    typeInput = factories
  } else if (type == 'Store') {
    typeInput = stores
  } else if (type == 'ServiceCenter') {
    typeInput = serviceCenters
  }

  const [typeSelect, setTypeSelect] = useState('')
  const handeInputChange = (e) => {
    setTypeSelect(e.target.value)
  }

  return (
    <div >
      <div className="addfactoryFilter">
        {/* Tỉnh/ Thành phố */}
        <div className="addfilterSection">
          <div className="filterTitle">Province/City</div>
          <FormControl >
            <Select className="addfilterBox"
              value={provinceCode}
              onChange={handleProvinceCodeChange}
            >
              <MenuItem value={"00"}>
                <em>Tất cả</em>
              </MenuItem>
              {province.map((data, index) => {
                return <MenuItem value={data.code} key={index}>{data.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>
        {/* Quận/ Huyện */}
        <div className="addfilterSection">
          <div className="filterTitle">District</div>
          <FormControl >
            <Select className="addfilterBox"
              value={districtCode}
              onChange={handleDistrictCodeChange}
            >
              <MenuItem value={"000"}>
                <em>Tất cả</em>
              </MenuItem>
              {district.map((data, index) => {
                return <MenuItem value={data.code} key={index}>{data.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>
        {/* Phường xã */}
        <div className="addfilterSection">
          <div className="filterTitle">Ward</div>
          <FormControl >
            <Select className="addfilterBox"
              value={wardCode}
              onChange={handleWardCodeChange}
            >
              <MenuItem value='0000'>
                <em>Tất cả</em>
              </MenuItem>
              {ward.map((data, index) => {
                return <MenuItem value={data.code} key={index}>{data.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}


