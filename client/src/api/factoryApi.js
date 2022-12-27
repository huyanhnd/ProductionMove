import {
    getFactoryStart,
    getFactorySuccess,
    getFactoryFailure,
    addFactoryStart,
    addFactorySuccess,
    addFactoryFailure,
} from "../redux/factorySlice";
import { publicRequest } from "./requestMethods";

export const getFactory = async (dispatch, provinceCode, districtCode, wardCode, factoryName) => {
    dispatch(getFactoryStart());
    try {
        var res;
        if (provinceCode === '00') {
            res = await publicRequest.get(`/Factory`);
        } 
        else {
            if (districtCode === '000') {
                res = await publicRequest.get(`/Factory?ProvinceCode=${provinceCode}`);
            }
            else {
                if (wardCode === '0000') {
                    res = await publicRequest.get(`/Factory?DistrictCode=${districtCode}`);
                } else { 
                    res = await publicRequest.get(`/Factory?WardCode=${wardCode}`); 
                }
            }
        }
        dispatch(getFactorySuccess(factoryName !== '' ? res.data.items.filter(item => {
            return item.name.includes(factoryName)
        }) :  res.data.items));
    } catch (err) {
        dispatch(getFactoryFailure());
    }
};

export const addFactory = async (factory, dispatch) => {
    dispatch(addFactoryStart());
    try {
        const res = await publicRequest.post(`/Factory`, factory);
        dispatch(addFactorySuccess(res.data));
    } catch (err) {
        dispatch(addFactoryFailure());
    }
};