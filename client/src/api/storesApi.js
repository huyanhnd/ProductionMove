import { useSelector } from "react-redux";
import {
    getStoresStart,
    getStoresSuccess,
    getStoresFailure,
    addStoreStart,
    addStoreSuccess,
    addStoreFailure,
} from "../redux/storeSlice";
import { publicRequest } from "./requestMethods";

export const getStore = async (dispatch, provinceCode, districtCode, wardCode, storeName) => {
    dispatch(getStoresStart());
    try {
        var res;
        if (provinceCode === '00') {
            res = await publicRequest.get(`/Store`);
        } 
        else {
            if (districtCode === '000') {
                res = await publicRequest.get(`/Store?ProvinceCode=${provinceCode}`);
            }
            else {
                if (wardCode === '0000') {
                    res = await publicRequest.get(`/Store?DistrictCode=${districtCode}`);
                } else { 
                    res = await publicRequest.get(`/Store?WardCode=${wardCode}`); 
                }
            }
        }
        dispatch(getStoresSuccess(storeName !== '' ? res.data.items.filter(item => {
            return item.name.includes(storeName)
        }) :  res.data.items));
    } catch (err) {
        dispatch(getStoresFailure());
    }
};

export const addStore = async (Store, dispatch) => {
    dispatch(addStoreStart());
    try {
        const res = await publicRequest.post(`/Store`, Store);
        dispatch(addStoreSuccess(res.data));
    } catch (err) {
        dispatch(addStoreFailure());
    }
}
