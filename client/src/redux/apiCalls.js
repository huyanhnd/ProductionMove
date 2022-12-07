import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  getSeriesStart,
  getSeriesSuccess,
  getSeriesFailure,
} from "./seriesRedux";
import {
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
  addProductLineFailure,
} from "./productRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/Account/authenticate", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getSeries = async (dispatch) => {
  dispatch(getSeriesStart());
  try {
    const res = await publicRequest.get("/series");
    console.log(res);
    dispatch(getSeriesSuccess(res.data));
  } catch (err) {
    dispatch(getSeriesFailure());
  }
};

export const getProductLine = async (dispatch) => {
  dispatch(getProductLineStart());
  try {
    const res = await publicRequest.get("/productline");
    console.log(res);
    dispatch(getProductLineSuccess(res.data));
  } catch (err) {
    dispatch(getProductLineFailure());
  }
};
export const deleteProductLine = async (code, dispatch) => {
  dispatch(deleteProducLineStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductLineSuccess(code));
  } catch (err) {
    dispatch(deleteProductLineFailure());
  }
};

export const updateProductLine = async (code, product, dispatch) => {
  dispatch(updateProductLineStart());
  try {
    // update
    dispatch(updateProductLineSuccess({ code, product }));
  } catch (err) {
    dispatch(updateProductLineFailure());
  }
};

export const addProductLine = async (product, dispatch) => {
  dispatch(addProductLineStart());
  try {
    const res = await userRequest.post('/productline', product);
    dispatch(addProductLineSuccess(res.data));
  } catch (err) {
    dispatch(addProductLineFailure());
  }
};
