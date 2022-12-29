import { createSlice } from "@reduxjs/toolkit";

export const currentServiceCenterSlice = createSlice({
    name: "currentServiceCenter",
    initialState: {
        serviceCenterInfo: {},
    },
    reducers: {
        //GET ALL
        setCurrentServiceCenterInfo: (state, action) => {
            state.serviceCenterInfo = action.payload
        }
    },
});

export const { setCurrentServiceCenterInfo } = currentServiceCenterSlice.actions;
export default currentServiceCenterSlice.reducer;
