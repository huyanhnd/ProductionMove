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
    getProductLineStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductLineSuccess: (state, action) => {
      state.isFetching = false;
      state.productline = action.payload;
    },
    getProductLineFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteProducLineStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductLineSuccess: (state, action) => {
      state.isFetching = false;
      state.productline.splice(
        state.productline.findIndex((item) => item.code === action.payload),
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
      state.productline[
        state.productline.findIndex((item) => item.code === action.payload.code)
      ] = action.payload.product;
    },
    updateProductLineFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addProductLineStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductLineSuccess: (state, action) => {
      state.isFetching = false;
      state.productline.push(action.payload);
    },
    addProductLineFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductLineStart,
  getProductLineSuccess,
  getProductLineFailure,
  deleteProducLineStart,
  deleteProductLineSuccess,
  deleteProductLineFailure,
  updateProductLineStart,
  updateProductLineSuccess,
  updateProductLineFailure,
  addProductLineStart,
  addProductLineSuccess,
  addProductLineFailure
} = productLineSlice.actions;
export default productLineSlice.reducer;
