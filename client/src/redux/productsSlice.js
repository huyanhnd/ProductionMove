import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "product",
    initialState: {
        // totalItems: 0,
        products: [],
        errorProducts: [],
        productFactory: [],
        productStore: [],
        productServiceCenter: [],
        productServiceCenterFiltered: [],
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

        //Factory
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

        // Store
        getProductsStoreStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductsStoreSuccess: (state, action) => {
            state.isFetching = false;
            state.productStore = action.payload;
        },
        getProductsStoreFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // Service Center
        getProductsServiceCenterStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductsServiceCenterSuccess: (state, action) => {
            state.isFetching = false;
            state.productServiceCenter = action.payload;
        },
        getProductsServiceCenterFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        getProductsServiceCenterFilteredStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductsServiceCenterFilteredSuccess: (state, action) => {
            state.isFetching = false;
            state.productServiceCenterFiltered = action.payload;
        },
        getProductsServiceCenterFilteredFailure: (state) => {
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

        //Factory Error Product
        getErrorProductsFactoryStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getErrorProductsFactorySuccess: (state, action) => {
            state.isFetching = false;
            state.errorProducts = action.payload;
        },
        getErrorProductsFactoryFailure: (state) => {
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
    getProductsStoreStart,
    getProductsStoreSuccess,
    getProductsStoreFailure,
    getProductsServiceCenterStart,
    getProductsServiceCenterSuccess,
    getProductsServiceCenterFailure,
    getProductsServiceCenterFilteredStart,
    getProductsServiceCenterFilteredSuccess,
    getProductsServiceCenterFilteredFailure,
    getErrorProductsFactoryStart,
    getErrorProductsFactorySuccess,
    getErrorProductsFactoryFailure,
} = productsSlice.actions;
export default productsSlice.reducer;