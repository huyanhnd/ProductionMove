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
    getProductLineByIdStart,
    getProductLineByIdSuccess,
    getProductLineByIdFailure,
    getProductLineByCodeStart,
    getProductLineByCodeSuccess,
    getProductLineByCodeFailure,
} from "../redux/productLineSlice";
import { publicRequest } from "./requestMethods";

export const getProductLines = async (dispatch,id) => {
    dispatch(getProductLinesStart());
    try {
        const res = await publicRequest.get(`/Productline`);
        dispatch(getProductLinesSuccess(res.data));
    } catch (err) {
        dispatch(getProductLinesFailure());
    }
};

export const getProductLineById = async (dispatch,id) => {
    dispatch(getProductLineByIdStart());
    try {
        const res = await publicRequest.get(`/Productline/${id}`);
        dispatch(getProductLineByIdSuccess(res.data));
    } catch (err) {
        dispatch(getProductLineByIdFailure());
    }
};

export const getProductLineByCode = async (dispatch,Code) => {
    dispatch(getProductLineByCodeStart());
    try {
        const res = await publicRequest.get(`/Productline/${Code}`);
        dispatch(getProductLineByCodeSuccess(res.data));
    } catch (err) {
        dispatch(getProductLineByCodeFailure());
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
