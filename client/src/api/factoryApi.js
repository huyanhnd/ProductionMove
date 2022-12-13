import {
    getFactoryStart,
    getFactorySuccess,
    getFactoryFailure,
} from "../redux/factorySlice";
import { publicRequest } from "./requestMethods";

export const getFactory = async (dispatch, provinceCode, districtCode, wardCode) => {
    dispatch(getFactoryStart());
    try {
        var res = {};
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
        dispatch(getFactorySuccess(res.data));
    } catch (err) {
        dispatch(getFactoryFailure());
    }
};

        // if (provinCode === '00') {
        //     res = await publicRequest.get(`/Factory`);
        // } 
        // else {
        //     if (districtCode === '000') {
        //         res = await publicRequest.get(`/Factory?ProvinceCode=${provinCode}`);
        //     }
        //     else {
        //         if (wardCode === '0000') {
        //             res = await publicRequest.get(`/Factory?DistrictCode=${districtCode}`);
        //         } else { 
        //             res = await publicRequest.get(`/Factory?WardCode=${wardCode}`); 
        //         }
        //     }
        // }