
import { useSelector } from "react-redux";
import {
    getServiceCentersStart,
    getServiceCentersSuccess,
    getServiceCentersFailure,
    addServiceCenterStart,
    addServiceCenterSuccess,
    addServiceCenterFailure,
} from "../redux/serviceCenter";
import { publicRequest } from "./requestMethods";

export const getServiceCenter = async (dispatch, provinceCode, districtCode, wardCode, serviceCenterName) => {
    dispatch(getServiceCentersStart());
    try {
        var res;
        if (provinceCode === '00') {
            res = await publicRequest.get(`/ServiceCenter`);
        } 
        else {
            if (districtCode === '000') {
                res = await publicRequest.get(`/ServiceCenter?ProvinceCode=${provinceCode}`);
            }
            else {
                if (wardCode === '0000') {
                    res = await publicRequest.get(`/ServiceCenter?DistrictCode=${districtCode}`);
                } else { 
                    res = await publicRequest.get(`/ServiceCenter?WardCode=${wardCode}`); 
                }
            }
        }
        dispatch(getServiceCentersSuccess(serviceCenterName !== '' ? res.data.items.filter(item => {
            return item.name.includes(serviceCenterName)
        }) :  res.data.items));
    } catch (err) {
        dispatch(getServiceCentersFailure());
    }
};

export const addServiceCenter = async (ServiceCenter, dispatch) => {
    dispatch(addServiceCenterStart());
    try {
        const res = await publicRequest.post(`/ServiceCenter`, ServiceCenter);
        dispatch(addServiceCenterSuccess(res.data));
        alert("Successfully!")
    } catch (err) {
        dispatch(addServiceCenterFailure());
        alert("Failure!")
    }
}
