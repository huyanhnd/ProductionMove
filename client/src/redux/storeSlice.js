import { createSlice } from "@reduxjs/toolkit";

export const storesSlice = createSlice({
    name: "stores",
    initialState: {
        // totalItems: 0,
        stores: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        getStoresStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getStoresSuccess: (state, action) => {
            state.isFetching = false;
            state.stores = action.payload;
        },
        getStoresFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //ADD
        addStoreStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addStoreSuccess: (state, action) => {
            state.isFetching = false;
            state.stores.push(action.payload);
        },
        addStoreFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getStoresStart,
    getStoresSuccess,
    getStoresFailure,
    addStoreStart,
    addStoreSuccess,
    addStoreFailure, } = storesSlice.actions;
export default storesSlice.reducer;

