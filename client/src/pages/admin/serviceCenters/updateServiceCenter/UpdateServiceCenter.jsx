import "./updateServiceCenter.css"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDistrict, getProvince, getWard } from "../../../../api/addressApi";


export default function UpdateServiceCenter() {
    const dispatch = useDispatch();
    useEffect(() => {
        getProvince(dispatch);
    }, [dispatch]);
    const serviceCenterInfo = useSelector((state) => state.currentServiceCenter.serviceCenterInfo);

    /**
     * name handle
    */
    const [serviceCenterName, setServiceCenterName] = useState(serviceCenterInfo.name)
    const handeServiceCenterNameChange = (e) => {
        setServiceCenterName(e.target.value)
    }
    /**
     * province handle
     */
    const province = useSelector((state) => state.address.province);
    const [provinceCode, setProvinceCode] = useState(serviceCenterInfo.provinceCode)
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
    const [districtCode, setDistrictCode] = useState(serviceCenterInfo.districtCode)
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
    const [wardCode, setWardCode] = useState(serviceCenterInfo.wardCode)
    const handleWardCodeChange = (e) => {
        setWardCode(e.target.value)
    }
    /**
     * address handle
     */
    const [address, setAddress] = useState(serviceCenterInfo.address)
    const handeAddressChange = (e) => {
        setAddress(e.target.value)
    }

    const handleSubmit = (e) => {
        const newServiceCenterName = document.getElementsByClassName('input-box_')[0].value
        const newProvinceCode = provinceCode
        const newProvinceName = province.find(curValue => {
            return curValue.code == newProvinceCode
        }).name
        const newDistrictCode = districtCode
        const newDistrictName = district.find(curValue => {
            return curValue.code == newDistrictCode
        }).name
        const newWardCode = wardCode
        const newWardName = ward.find(curValue => {
            return curValue.code == newWardCode
        }).name
        const newAddress = document.getElementsByClassName('input-box_')[1].value.concat(' - ', newWardName,' - ', newDistrictName,' - ', newProvinceName)
        const newInfo = { serviceCenterName: newServiceCenterName, provinceCode: newProvinceCode, provinceName: newProvinceName, districtCode: newDistrictCode, districtName: newDistrictName, wardCode: newWardCode, wardName: newWardName, address:newAddress }
        const [a,c,...d] = newInfo.address.split(" - ")
        alert("Successfully!")
    }
    return (
        <div className="updateServiceCenter-container">
            <div className="updateServiceCenter-content">
                <div className="title">
                    Please enter details below!
                </div>

                {/* sửa tên nhà máy */}
                <div className="select-section">
                    <div className="select-title">ServiceCenter name</div>
                    <input type="text" placeholder="Type ServiceCenter name here" class="input-box_" value={serviceCenterName} onChange={handeServiceCenterNameChange} />
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
                    <input type="text" placeholder="Type address here" class="input-box_" value={address} onChange={handeAddressChange} />
                </div>
                <div
                    id="submit-ServiceCenter"
                    onClick={handleSubmit}
                >Submit</div>
            </div>
        </div>
    )
}