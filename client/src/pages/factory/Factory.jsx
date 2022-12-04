import "./factory.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect, createContext } from 'react';
import FactoryList from './FactoryList';
import { factoryRows } from "../../dummyData";

export const DataContext = createContext();

export default function GroupedSelect() {
  const [filteredData, setFilteredData] = useState(factoryRows);
  // console.log(data)
  const [province, setProvince] = useState('all')
  // const data = 
  const handleChange = (e) => {
    setProvince(e.target.value)
  }
  useEffect(() => {
    setFilteredData(province==='all' ? factoryRows : factoryRows.filter(data=>data.province === province));
  }, [province])

  // console.log("Province: ", province)
  // console.log("data", filteredData)
  return (
    <div className="factoryList">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={province}
            onChange={handleChange}
          // displayEmpty
          // inputProps={{ 'aria-label': 'Without label' }}
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          // style={{width: 120}}
          >
            <MenuItem value="all">
              <em>Tất cả</em>
            </MenuItem>
            <MenuItem value={1}>Hà Nội</MenuItem>
            <MenuItem value={3}>Nghệ An</MenuItem>
            <MenuItem value={4}>Nam Định</MenuItem>
            <MenuItem value={2}>Ninh Bình</MenuItem>
          </Select>
          {/* <FormHelperText>Without label</FormHelperText> */}
        </FormControl>

        <div className="submit-btn">Submit</div>
        <DataContext.Provider value={filteredData}>
        <FactoryList />
      </DataContext.Provider>
    </div>
  );
}

