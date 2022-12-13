import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  getSeriesStart,
  getSeriesSuccess,
  getSeriesFailure,
} from "./seriesRedux";
import {
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
} from "./productLineRedux";
import { publicRequest } from "../requestMethods";

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
    dispatch(getSeriesSuccess(res.data));
  } catch (err) {
    dispatch(getSeriesFailure());
  }
};

//ProductLine
export const getProductLine = async (dispatch) => {
  dispatch(getProductLinesStart());
  try {
    const res = await publicRequest.get("/productline");
    dispatch(getProductLinesSuccess(res.data));
  } catch (err) {
    dispatch(getProductLinesFailure());
  }
};

export const deleteProductLine = async (code, dispatch) => {
  dispatch(deleteProductLineStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductLineSuccess(code));
  } catch (err) {
    dispatch(deleteProductLineFailure());
  }
};

export const updateProductLine = async (code, productLine, dispatch) => {
  dispatch(updateProductLineStart());
  try {
    // update
    dispatch(updateProductLineSuccess({ code, productLine }));
  } catch (err) {
    dispatch(updateProductLineFailure());
  }
};
export const addProductLine = async (productLine, dispatch) => {
  dispatch(addProductLineStart());
  try {
    const res = await publicRequest.post(`/products`, productLine);
    dispatch(addProductLineSuccess(res.data));
  } catch (err) {
    dispatch(addProductLineFailure());
  }
};

/**
 * factory
 */
