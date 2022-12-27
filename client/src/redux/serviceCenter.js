import { createSlice } from "@reduxjs/toolkit";

export const serviceCentersSlice = createSlice({
    name: "serviceCenters",
    initialState: {
        // totalItems: 0,
        serviceCenters: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        getServiceCentersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getServiceCentersSuccess: (state, action) => {
            state.isFetching = false;
            state.serviceCenters = action.payload;
        },
        getServiceCentersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //ADD
        addServiceCenterStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addServiceCenterSuccess: (state, action) => {
            state.isFetching = false;
            state.serviceCenters.push(action.payload);
        },
        addServiceCenterFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getServiceCentersStart,
    getServiceCentersSuccess,
    getServiceCentersFailure,
    addServiceCenterStart,
    addServiceCenterSuccess,
    addServiceCenterFailure, } = serviceCentersSlice.actions;
export default serviceCentersSlice.reducer;

