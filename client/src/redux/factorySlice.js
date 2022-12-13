import { createSlice } from "@reduxjs/toolkit";

export const factorySlice = createSlice({
    name: "factory",
    initialState: {
        factory: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //Get Factory
        getFactoryStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getFactorySuccess: (state, action) => {
            state.isFetching = false;
            state.factory = action.payload;
        },
        getFactoryFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { getFactoryStart, getFactorySuccess, getFactoryFailure } = factorySlice.actions;
export default factorySlice.reducer;
