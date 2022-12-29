import { useSelector } from "react-redux";
import {
    getProductsStart,
    getProductsSuccess,
    getProductsFailure,
    postNewProductsFailure,
    postNewProductsStart,
    postNewProductsSuccess,
    getProductsFactoryStart,
    getProductsFactoryFailure,
    getProductsFactorySuccess,
    getProductsStoreStart,
    getProductsStoreSuccess,
    getProductsStoreFailure
} from "../redux/productsSlice";
import { publicRequest } from "./requestMethods";
import { userRequest } from "./requestMethods";
import { getToken } from "../helper/auth";

export const getProducts = async (dispatch) => {
    dispatch(getProductsStart());
    try {
        const res = await publicRequest.get(`/Product`);
        dispatch(getProductsSuccess(res.data.items));
    } catch (err) {
        dispatch(getProductsFailure());
    }
};

export const getProductFactory = async (
    dispatch,
    PageNumber,
    PageSize,
    FactoryId,
    Status
) => {
    dispatch(getProductsFactoryStart());
    try {
        const res = await userRequest(getToken()).get(
            `/Product/factory?PageNumber=${PageNumber}&PageSize=${PageSize}&FactoryId=${FactoryId}&Status=${Status}`
        );
        dispatch(getProductsFactorySuccess(res.data.items));
    } catch (err) {
        dispatch(getProductsFactoryFailure());
    }
};

export const getProductStore = async (
    dispatch,
    StoreId,
    Status,
) => {
    dispatch(getProductsStoreStart());
    try {
        const res = await publicRequest.get(
            `/Product/?StoreId=${StoreId}&Status=${Status}`
        );
        dispatch(getProductsStoreSuccess(res.data.items));
    } catch (err) {
        dispatch(getProductsStoreFailure());
    }
};

export const getProductsByFactory = async (dispatch, factoryId) => {
    dispatch(getProductsStart());
    try {
        const res = await publicRequest.get(`/Product?FactoryId=${factoryId}`);
        dispatch(getProductsSuccess(res.data.items));
    } catch (err) {
        dispatch(getProductsFailure());
    }
};

export const postNewProducts = async (products, dispatch) => {
    dispatch(postNewProductsStart());
    try {
        const res = await publicRequest.post(`/Product`, products);
        dispatch(postNewProductsSuccess(res.data));
    } catch (err) {
        dispatch(postNewProductsFailure());
    }
};
