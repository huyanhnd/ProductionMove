import {
    getFactoryStart,
    getFactorySuccess,
    getFactoryFailure,
    addFactoryStart,
    addFactorySuccess,
    addFactoryFailure,
    updateFactoryStart,
    updateFactorySuccess,
    updateFactoryFailure,
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
        }) : res.data.items));
    } catch (err) {
        dispatch(getFactoryFailure());
    }
};

export const addFactory = async (factory, dispatch) => {
    dispatch(addFactoryStart());
    try {
        const res = await publicRequest.post(`/Factory`, factory);
        dispatch(addFactorySuccess(res.data));
        alert("Succesfully!")
    } catch (err) {
        dispatch(addFactoryFailure());
        alert("Failure!")
    }
};

export const updateFactory = async (id, factory, dispatch) => {
    dispatch(updateFactoryStart());
    try {
        const res = await publicRequest.post(`/Factory/${id}`, factory.id);
        dispatch(updateFactorySuccess(res.data));
        alert("Failure!")
    } catch (err) {
        dispatch(updateFactoryFailure());
        alert("Succesfully!")
    }
};