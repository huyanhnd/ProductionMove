import { createSlice } from "@reduxjs/toolkit";

export const addressSlice = createSlice({
    name: "address",
    initialState: {
        province: [],
        provinceCode: '00',
        isProvinceFetching: false,
        errorProvince: false,
        district: [],
        districtCode: '000',
        isDistrictFetching: false,
        errorDistrict: false,
        ward: [],
        wardCode: '0000',
        isWardFetching: false,
        errorWard: false,
    },
    reducers: {
        //Get province
        getProvinceStart: (state) => {
            state.isProvinceFetching = true;
            state.errorProvince = false;
        },
        getProvinceSuccess: (state, action) => {
            state.isProvinceFetching = false;
            state.province = action.payload;
        },
        getProvinceFailure: (state) => {
            state.isProvinceFetching = false;
            state.errorProvince = true;
        },
        getProvinceCode: (state) => {
            return state.provinceCode;
        },
        setProvinceCode: (state, action) => {
            state.provinceCode = action.payload
        },
        //Get district
        getDistrictStart: (state) => {
            state.isDistrictFetching = true;
            state.errorDistrict = false;
        },
        getDistrictSuccess: (state, action) => {
            state.isDistrictFetching = false;
            state.district = action.payload;
        },
        getDistrictFailure: (state) => {
            state.isDistrictFetching = false;
            state.errorDistrict = true;
        },
        getDistrictCode: (state) => {
            return state.districtCode;
        },
        setDistrictCode: (state, action) => {
            state.districtCode = action.payload
        },
        //Get ward
        getWardStart: (state) => {
            state.isWardFetching = true;
            state.errorWard = false;
        },
        getWardSuccess: (state, action) => {
            state.isWardFetching = false;
            state.ward = action.payload;
        },
        getWardFailure: (state) => {
            state.isWardFetching = false;
            state.errorWard = true;
        },
        getWardCode: (state) => {
            return state.wardCode;
        },
        setWardCode: (state, action) => {
            state.wardCode = action.payload
        },
    },
});

export const { 
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
} = addressSlice.actions;
export default addressSlice.reducer;
