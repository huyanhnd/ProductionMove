import { createSlice } from "@reduxjs/toolkit";

export const productLineSlice = createSlice({
    name: "productline",
    initialState: {
        totalItems: 0,
        productlines: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getProductLinesStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductLinesSuccess: (state, action) => {
            state.isFetching = false;
            state.productlines = action.payload.items;
            state.totalItems = action.payload.totalItems;
        },
        getProductLinesFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //DELETE
        deleteProductLineStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteProductLineSuccess: (state, action) => {
            state.isFetching = false;
            state.productlines.splice(
                state.productlines.findIndex((item) => item.code === action.payload),
                1
            );
        },
        deleteProductLineFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //UPDATE
        updateProductLineStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateProductLineSuccess: (state, action) => {
            state.isFetching = false;
            state.productlines[
                state.productlines.findIndex((item) => item.code === action.payload.code)
            ] = action.payload.product;
        },
        updateProductLineFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //ADD
        addProductLineStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addProductLineSuccess: (state, action) => {
            state.isFetching = false;
            state.productlines.push(action.payload);
        },
        addProductLineFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getProductLinesStart,
    getProductLinesSuccess,
    getProductLinesFailure,
    deleteProductLineStart,
    deleteProductLineSuccess,
    deleteProductLineFailure,
    updateProductLineStart,
    updateProductLineSuccess,
    updateProductLineFailure,
    addProductLineStart,
    addProductLineSuccess,
    addProductLineFailure,
} = productLineSlice.actions;
export default productLineSlice.reducer;
