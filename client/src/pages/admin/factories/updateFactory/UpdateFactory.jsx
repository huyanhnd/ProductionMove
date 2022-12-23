import "./updateFactory.css"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDistrict, getProvince, getWard } from "../../../../api/addressApi";
import { FactoryInfo } from "../FactoryList";


export default function UpdateFactory() {
    const dispatch = useDispatch();
    useEffect(() => {
        getProvince(dispatch);
    }, [dispatch]);
    const factoryInfo = useSelector((state) => state.currentFactory.factoryInfo);

    /**
     * name handle
    */
    const [factoryName, setFactoryName] = useState(factoryInfo.name)
    const handeFactoryNameChange = (e) => {
        setFactoryName(e.target.value)
    }
    /**
     * province handle
     */
    const province = useSelector((state) => state.address.province);
    const [provinceCode, setProvinceCode] = useState(factoryInfo.provinceCode)
    const handleProvinceCodeChange = (e) => {
        setProvinceCode(e.target.value)
        setDistrictCode('000')
        setWardCode('0000')
    }
    /**
     * District handle
     */
    useEffect(() => {
        getDistrict(dispatch, provinceCode);
    }, [provinceCode])
    const district = useSelector((state) => state.address.district);
    const [districtCode, setDistrictCode] = useState(factoryInfo.districtCode)
    const handleDistrictCodeChange = (e) => {
        setDistrictCode(e.target.value)
        setWardCode('0000')
    }
    /**
     * ward handle
     */
    useEffect(() => {
        getWard(dispatch, districtCode);
    }, [districtCode])
    const ward = useSelector((state) => state.address.ward);
    // const wardCode = useSelector((state) => state.address.wardCode)
    const [wardCode, setWardCode] = useState(factoryInfo.wardCode)
    const handleWardCodeChange = (e) => {
        setWardCode(e.target.value)
    }
    /**
     * address handle
     */
    const [address, setAddress] = useState(factoryInfo.address)
    const handeAddressChange = (e) => {
        setAddress(e.target.value)
    }


    return (
        <div className="updateFactory-container">
            <div className="updateFactory-content">
                <div className="title">
                    Please enter details below!
                </div>

                {/* sửa tên nhà máy */}
                <div className="select-section">
                    <div className="select-title">Factory name</div>
                    <input type="text" placeholder="Type factory name here" id="input-box" value={factoryName} onChange={handeFactoryNameChange} />
                </div>

                {/* Sửa thành phố */}
                <div className="select-section">
                    <div className="select-title">Province/City</div>
                    <FormControl >
                        <Select className="select-box"
                            value={provinceCode}
                            onChange={handleProvinceCodeChange}
                        >
                            {province.map((data, index) => {
                                return <MenuItem value={data.code} key={index}>{data.name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </div>

                {/* Sửa Huyện */}
                <div className="select-section">
                    <div className="select-title">District</div>
                    <FormControl >
                        <Select className="select-box"
                            value={districtCode}
                            onChange={handleDistrictCodeChange}
                        >
                            {district.map((data, index) => {
                                return <MenuItem value={data.code} key={index}>{data.name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </div>

                {/* Sửa Xã */}
                <div className="select-section">
                    <div className="select-title">Ward</div>
                    <FormControl >
                        <Select className="select-box"
                            value={wardCode}
                            onChange={handleWardCodeChange}
                        >
                            {ward.map((data, index) => {
                                return <MenuItem value={data.code} key={index}>{data.name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </div>

                {/* Sửa địa chỉ cụ thể */}
                <div className="select-section">
                    <div className="select-title">Address</div>
                    <input type="text" placeholder="Type address here" id="input-box" value={address} onChange={handeAddressChange} />
                </div>
            </div>
        </div>
    )
}