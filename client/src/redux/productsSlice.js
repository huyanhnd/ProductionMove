import {createSlice} from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        // totalItems: 0,
        products: [],
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
} = productsSlice.actions;
export default productsSlice.reducer;
