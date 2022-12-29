import {createSlice} from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "product",
    initialState: {
        // totalItems: 0,
        products: [],
        productFactory: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        getProductsStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductsSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductsFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        getProductsFactoryStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductsFactorySuccess: (state, action) => {
            state.isFetching = false;
            state.productFactory = action.payload;
        },
        getProductsFactoryFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        postNewProductsStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        postNewProductsSuccess: (state, action) => {
            state.isFetching = false;
            state.users.push(action.payload);
        },
        postNewProductsFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getProductsStart,
    getProductsSuccess,
    getProductsFailure,
    postNewProductsFailure,
    postNewProductsStart,
    postNewProductsSuccess,
    getProductsFactoryStart,
    getProductsFactorySuccess,
    getProductsFactoryFailure,
} = productsSlice.actions;
export default productsSlice.reducer;