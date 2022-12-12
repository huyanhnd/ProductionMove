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
} from "../redux/productLineSlice";
import { publicRequest } from "./requestMethods";

export const getProductLines = async (dispatch) => {
    dispatch(getProductLinesStart());
    try {
        const res = await publicRequest.get(`/productline`);
        dispatch(getProductLinesSuccess(res.data));
    } catch (err) {
        dispatch(getProductLinesFailure());
    }
};

export const deleteProductLine = async (code, dispatch) => {
    dispatch(deleteProductLineStart());
    try {
        // const res = await userRequest.delete(`/products/${code}`);
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
