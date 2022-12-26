import { useSelector } from "react-redux";
import {
    getProductsStart,
    getProductsSuccess,
    getProductsFailure,
} from "../redux/productsSlice";
import { publicRequest } from "./requestMethods";

export const getProducts = async (dispatch) => {
    dispatch(getProductsStart());
    try {
        const res = await publicRequest.get(`/Product`);
        dispatch(getProductsSuccess(res.data.items));
    } catch (err) {
        dispatch(getProductsFailure());
    }
};

export const getProductsByStore = async (dispatch, storeId) => {
    dispatch(getProductsStart());
    try {
        const res = await publicRequest.get(`/Product`);
        dispatch(getProductsSuccess(res.data.items.filter(item => {
            return item.storeId == storeId
        })));
    } catch (err) {
        dispatch(getProductsFailure());
    }
};
