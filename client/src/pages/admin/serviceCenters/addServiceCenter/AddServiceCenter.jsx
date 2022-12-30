import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDistrict, getProvince, getWard } from "../../../../api/addressApi";
import { getUsers } from "../../../../api/userApi";
import { addServiceCenter } from "../../../../api/serviceCenterApi";
import "../../factories/addFactory/addFactory.css"

export default function AddServiceCenter() {
    const dispatch = useDispatch();
    useEffect(() => {
        getProvince(dispatch);
    }, [dispatch]);

    /**
     * name handle
    */
    const [storeName, setStoreName] = useState("")
    const handeStoreNameChange = (e) => {
        setStoreName(e.target.value)
    }
    /**
     * province handle
     */
    const province = useSelector((state) => state.address.province);
    const [provinceCode, setProvinceCode] = useState('00')
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
    const [districtCode, setDistrictCode] = useState('000')
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
    const [wardCode, setWardCode] = useState('0000')
    const handleWardCodeChange = (e) => {
        setWardCode(e.target.value)
    }
    /**
     * address handle
     */
    const [address, setAddress] = useState('')
    const handeAddressChange = (e) => {
        setAddress(e.target.value)
    }

    /**
     * Store id handle
     */
    const allUsers = useSelector((state) => state.user.users);
    const storeIds = allUsers.filter(user => {
        return user.role == 'ServiceCenter'
    })
    console.log();
    const [storeId, setStoreId] = useState(storeIds[storeIds.length -1].id)
    const handleStoreIdChange = (e) => {
        setStoreId(e.target.value)
    }

    const handleSubmit = (e) => {
        const newStoreName = document.getElementsByClassName('filterInputBox_')[0].value
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
        const newAddress = document.getElementsByClassName('filterInputBox_')[1].value.concat(' - ', newWardName, ' - ', newDistrictName, ' - ', newProvinceName)
        const newStoreId = storeId
        const newStore = { "name": newStoreName, "address" : newAddress, "wardCode" : newWardCode,  "accountId" : newStoreId }
        addServiceCenter(newStore, dispatch)
    }
    return (
        <div className="updateFactory-container">
            <div className="updateFactory-content">
                <div className="title">
                    Please enter details below!
                </div>

                {/* sửa tên nhà máy */}
                <div className="filterSection_">
                    <div className="filterTitle">Store name</div>
                    <input type="text" placeholder="Type Store name here" class="filterInputBox_" value={storeName} onChange={handeStoreNameChange} />
                </div>

                {/* Sửa thành phố */}
                <div className="filterSection_">
                    <div className="filterTitle">Province/City</div>
                    <FormControl >
                        <Select className="filterBox"
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
                <div className="filterSection_">
                    <div className="filterTitle">District</div>
                    <FormControl >
                        <Select className="filterBox"
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
                <div className="filterSection_">
                    <div className="filterTitle">Ward</div>
                    <FormControl >
                        <Select className="filterBox"
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
                <div className="filterSection_">
                    <div className="filterTitle">Address</div>
                    <input type="text" placeholder="Type address here" class="filterInputBox_" value={address} onChange={handeAddressChange} />
                </div>

                {/* Sửa Store */}
                <div className="filterSection_">
                    <div className="filterTitle">Authorized account</div>
                    <FormControl >
                        <Select className="filterBox"
                            value={storeId}
                            onChange={handleStoreIdChange}
                        >
                            {storeIds.map((data, index) => {
                                return <MenuItem value={data.id} key={index}>{data.fullName}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </div>
                <div
                    id="submit-btn_"
                    onClick={handleSubmit}
                >Submit</div>
            </div>
        </div>
    )
}