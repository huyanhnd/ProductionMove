import "./addressFilter.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, createContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getFactory } from "../../api/factoryApi";
import { getDistrict, getProvince, getWard } from "../../api/addressApi";
import { setProvinceCode, setDistrictCode, setWardCode } from "../../redux/addressSlice"

export const DataContext = createContext();

export default function AddressFilter() {
  const dispatch = useDispatch();
  useEffect(() => {
    getProvince(dispatch);
  }, [dispatch]);

  /**
   * Province filter box
  */
  const province = useSelector((state) => state.address.province);
  const provinceCode = useSelector((state) => state.address.provinceCode)
  const handleProvinceCodeChange = (e) => {
    dispatch(setProvinceCode(e.target.value))
    dispatch(setDistrictCode('000'))
    dispatch(setWardCode('0000'))
  }

  /**
   * District filter box
  */
  useEffect(() => {
    getDistrict(dispatch, provinceCode);
  }, [provinceCode])
  const district = useSelector((state) => state.address.district);
  const districtCode = useSelector((state) => state.address.districtCode)
  const handleDistrictCodeChange = (e) => {
    dispatch(setDistrictCode(e.target.value))
    dispatch(setWardCode('0000'))
  }

  /**
   * Ward filter box
  */
  useEffect(() => {
    getWard(dispatch, districtCode);
  }, [districtCode])
  const ward = useSelector((state) => state.address.ward);
  const wardCode = useSelector((state) => state.address.wardCode)
  const handleWardCodeChange = (e) => {
    dispatch(setWardCode(e.target.value))
  }

  /**
   * Factory name filter box
  */

  /**
   * submit
  */
  useEffect(() => {
    getFactory(dispatch, provinceCode, districtCode, wardCode);
  }, [provinceCode,districtCode,wardCode]);
  const HandleSubmit = (e) => {
    
  }

  return (
    <div >
      <div className="factoryFilter">
        {/* Tỉnh/ Thành phố */}
        <div className="filterSection">
          <div className="filterTitle">Province/City</div>
          <FormControl >
            <Select className="filterBox"
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
        <div className="filterSection">
          <div className="filterTitle">District</div>
          <FormControl >
            <Select className="filterBox"
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
        <div className="filterSection">
          <div className="filterTitle">Ward</div>
          <FormControl >
            <Select className="filterBox"
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
        {/* Tên nhà máy */}
        <div className="filterSection ">
          <div className="filterTitle">Factory name</div>
          <input type="text" placeholder="Type factory name here" className="filterInputBox" />
        </div>
        <div className="filterSection">
          <br />
          <div
            className="submit-btn"
            onClick={HandleSubmit}
          >Submit</div>
        </div>
      </div>
      {/* <DataContext.Provider value={factory}>
        <FactoryList />
      </DataContext.Provider> */}
    </div>
  );
}

