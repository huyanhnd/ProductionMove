import { createSlice } from "@reduxjs/toolkit";

export const factorySlice = createSlice({
    name: "factory",
    initialState: {
        // totalItems: 0,
        factories: [],
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
            state.factories = action.payload;
            // state.totalItems = action.payload.totalItems;
        },
        getFactoryFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        setFactoryByCode: (state, action) => {
            if (action.payload !== ''){
                const temp = state.factories.filter(item => {
                    return item.name.includes(action.payload)
                })
            }
            console.log("factory: ", state.factories);
        },
    },
});

export const { getFactoryStart, getFactorySuccess, getFactoryFailure, setFactoryByCode } = factorySlice.actions;
export default factorySlice.reducer;
