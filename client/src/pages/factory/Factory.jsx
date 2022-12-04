import "./factory.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect, createContext } from 'react';
import FactoryList from './FactoryList';
import { factoryRows } from "../../dummyData";
import axios from "axios";

export const DataContext = createContext();

export default function GroupedSelect() {

  /**
   * set province filter
   */
  const [provinceData, setProvinceData] = useState([]);
  useEffect(() => {
    async function axiosProvinceData() {
      try {
        const requestUrl = 'https://localhost:7102/provinces';
        const response = await axios.get(requestUrl)
        console.log("data province: ", response);
        setProvinceData(response.data)
        setFilteredData(response.data)
      } catch (error) {
        console.log('Fail to get data', error.message)
      }
    }
    axiosProvinceData();
  }, [])
  const [province, setProvince] = useState(0)
  const handleProvinceChange = (e) => {
    setProvince(e.target.value)
  }

  /**
    * set district filter
    */
  const [districtData, setDistrictData] = useState([]);
  useEffect(() => {
    async function axiosDistrictData() {
      try {
        const requestUrl = `https://localhost:7102/dictricts?provinceId=${province}`;
        const response = await axios.get(requestUrl)
        console.log("data District: ", response);
        setDistrictData(response.data)
      } catch (error) {
        console.log('Fail to get data', error.message)
      }
    }
    axiosDistrictData();
  }, [province])
  const [district, setDistrict] = useState(0)
  const handleDistrictChange = (e) => {
    setDistrict(e.target.value)
  }

  /**
    * set ward filter
    */
  const [wardData, setWardData] = useState([]);
  useEffect(() => {
    async function axiosWardData() {
      try {
        const requestUrl = `https://localhost:7102/wards?districtId=${district}`;
        const response = await axios.get(requestUrl)
        console.log("data Ward: ", response);
        setWardData(response.data)
      } catch (error) {
        console.log('Fail to get data', error.message)
      }
    }
    axiosWardData();
  }, [district])
  const [ward, setWard] = useState(0)
  const handleWardChange = (e) => {
    setWard(e.target.value)
  }

/**
  * set factory name filter
  */
 const [factoryData, setFactoryData] = useState([]);
 useEffect(() => {
   async function axiosWardData() {
     try {
       const requestUrl = `https://localhost:7102/api/Factory/${ward}`;
       const response = await axios.get(requestUrl)
       console.log("data Ward: ", response);
       setFactoryData(response.data)
     } catch (error) {
       console.log('Fail to get data', error.message)
     }
   }
   axiosWardData();
 }, [ward])
//  const [ward, setWard] = useState(0)
//  const handleWardChange = (e) => {
//    setWard(e.target.value)
//  }

  // useEffect(() => {
  //   setFilteredData(province === 'all' ? factoryRows : factoryRows.filter(data => data.province === province));
  // }, [province])

  const [filteredData, setFilteredData] = useState([]);
  console.log("data filter: ", filteredData);

  const handleSubmit = () => {
    if (province == 0) {
      setFilteredData(provinceData)
    } else
      if (district == 0) {
        setFilteredData(districtData)
      }
      else {
        if (ward == 0) {
          setFilteredData(wardData)
        } else {
          setFilteredData(factoryData)
        }
      }
  }

  return (
    <div className="factoryPage">
      <div className="factoryFilter">
        {/* Tỉnh/ Thành phố */}
        <div className="filterSection">
          <div className="filterTitle">Province/City</div>
          <FormControl >
            <Select className="filterBox"
              value={province}
              onChange={handleProvinceChange}
            >
              <MenuItem value={0}>
                <em>Tất cả</em>
              </MenuItem>
              {provinceData.map((data) => {
                return <MenuItem value={data.id} key={data.id}>{data.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>
        {/* Quận/ Huyện */}
        <div className="filterSection">
          <div className="filterTitle">District</div>
          <FormControl >
            <Select className="filterBox"
              value={district}
              onChange={handleDistrictChange}
            >
              <MenuItem value={0}>
                <em>Tất cả</em>
              </MenuItem>
              {districtData.map((data) => {
                return <MenuItem value={data.id} key={data.id}>{data.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>
        {/* Phường xã */}
        <div className="filterSection">
          <div className="filterTitle">Ward</div>
          <FormControl >
            <Select className="filterBox"
              value={ward}
              onChange={handleWardChange}
            >
              <MenuItem value={0}>
                <em>Tất cả</em>
              </MenuItem>
              {wardData.map((data) => {
                return <MenuItem value={data.id} key={data.id}>{data.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>
        {/* Tên nhà máy */}
        <div className="filterSection">
          <div className="filterTitle">Factory name</div>
          <input type="text" placeholder="Type factory name..." className="filterInputBox" />
        </div>
        <div className="filterSection">
          <br />
          <div
            className="submit-btn"
            onClick={handleSubmit}>Submit</div>
        </div>
      </div>
      <DataContext.Provider value={filteredData}>
        <FactoryList />
      </DataContext.Provider>
    </div>
  );
}

