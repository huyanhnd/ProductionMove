import { createSlice } from "@reduxjs/toolkit";

export const addressSlice = createSlice({
    name: "address",
    initialState: {
        province: [],
        isProvinceFetching: false,
        errorProvince: false,
        district: [],
        isDistrictFetching: false,
        errorDistrict: false,
        ward: [],
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
    },
});

export const { 
    getProvinceStart,
    getProvinceSuccess,
    getProvinceFailure,
    getDistrictStart,
    getDistrictSuccess,
    getDistrictFailure,
    getWardStart,
    getWardSuccess,
    getWardFailure,
} = addressSlice.actions;
export default addressSlice.reducer;
