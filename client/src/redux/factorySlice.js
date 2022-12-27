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
            // state.factories = action.payload.items;
            // state.totalItems = action.payload.totalItems;
            state.factories = action.payload;
            // state.totalItems = action.payload.totalItems;
        },
        getFactoryFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //ADD
        addFactoryStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addFactorySuccess: (state, action) => {
            state.isFetching = false;
            state.factories.push(action.payload);
        },
        addFactoryFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getFactoryStart,
    getFactorySuccess,
    getFactoryFailure,
    addFactoryStart,
    addFactorySuccess,
    addFactoryFailure, } = factorySlice.actions;
export default factorySlice.reducer;
