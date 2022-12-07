import { createSlice } from "@reduxjs/toolkit";

export const productLineSlice = createSlice({
    name: "productline",
    initialState: {
        productline: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getProductsStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductsSuccess: (state, action) => {
            state.isFetching = false;
            state.productline = action.payload;
        },
        getProductsFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

    },
});

export const { getProductsStart, getProductsSuccess, getProductsFailure } = productLineSlice.actions;
export default productLineSlice.reducer;
