import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  getSeriesStart,
  getSeriesSuccess,
  getSeriesFailure,
} from "./seriesRedux";
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
} from "./productRedux";
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
    console.log(res);
    dispatch(getSeriesSuccess(res.data));
  } catch (err) {
    dispatch(getSeriesFailure());
  }
};

export const getProductLine = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = await publicRequest.get("/productline");
    console.log(res);
    dispatch(getProductsSuccess(res.data));
  } catch (err) {
    dispatch(getProductsFailure());
  }
};
