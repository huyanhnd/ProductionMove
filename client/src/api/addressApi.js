import {
    getProvinceStart,
    getProvinceSuccess,
    getProvinceFailure,
    getProvinceCode,
    setProvinceCode,
    getDistrictStart,
    getDistrictSuccess,
    getDistrictFailure,
    getDistrictCode,
    setDistrictCode,
    getWardStart,
    getWardSuccess,
    getWardFailure,
    getWardCode,
    setWardCode
} from "../redux/addressSlice";
import axios from "axios";
import { useSelector } from "react-redux";
// https://localhost:7102/districts?provinceCode=01
const BASE_URL = "https://localhost:7102/";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

//Province
export const getProvince = async (dispatch) => {
    dispatch(getProvinceStart());
    try {
        const res = await publicRequest.get(`/provinces`);
        dispatch(getProvinceSuccess(res.data));
    } catch (err) {
        dispatch(getProvinceFailure());
    }
};

//District
export const getDistrict = async (dispatch, provinceCode) => {
    dispatch(getDistrictStart());
    try {
        // const provinceCode = useSelector((state) => state.address.provinceCode)
        const res = await publicRequest.get(`/districts?provinceCode=${provinceCode}`);
        dispatch(getDistrictSuccess(res.data));
    } catch (err) {
        dispatch(getDistrictFailure());
    }
};
//Ward
export const getWard = async (dispatch, districtCode) => {
    dispatch(getWardStart());
    try {
        const res = await publicRequest.get(`/wards?districtCode=${districtCode}`);
        dispatch(getWardSuccess(res.data));
    } catch (err) {
        dispatch(getWardFailure());
    }
};




// export const userRequest = (token) => {
//   return axios.create({
//     baseURL: BASE_URL,
//     headers: { authorization: `Bearer ${token}` },
//   });
// }