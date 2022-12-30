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
    getProductsStoreFailure,
    getProductsServiceCenterFailure,
    getProductsServiceCenterStart,
    getProductsServiceCenterSuccess,
    getProductsServiceCenterFilteredStart,
    getProductsServiceCenterFilteredSuccess,
    getProductsServiceCenterFilteredFailure,
    getErrorProductsFactoryFailure,
    getErrorProductsFactorySuccess,
    getErrorProductsFactoryStart,
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

export const getProductsAdmin = async (dispatch, productlineId, factoryId, storeId, serviceCenterId,status) => {
    dispatch(getProductsStart());
    try {
        const res = await publicRequest.get(`/Product?FactoryId=${factoryId}&StoreId=${storeId}&ServiceCenterId=${serviceCenterId}&ProductLineId=${productlineId}&Status=${status}`);
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
    Status,
    ProductLineId,
    Color,
    Memory
) => {
    dispatch(getProductsFactoryStart());

    try {
        const res = await publicRequest.get(
            // '/Product?PageNumber=1&PageSize=10&FactoryId=2&Status=InFactory&ProductLineId=0&Color=All&Capacity=64GB
            `/Product?PageNumber=${PageNumber}&PageSize=${PageSize}&FactoryId=${FactoryId}&Status=${Status}&ProductLineId=${ProductLineId}&Color=${Color}&Capacity=${Memory}`
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

///Product?ServiceCenterId=4&Status=All&Color=All
export const getProductServiceCenterFiltered = async (
    dispatch,
    ProductLineId,
    FactoryId,
    StoreId,
    ServiceCenterId,
    Status,
    Color,
    Memory
) => {
    dispatch(getProductsServiceCenterFilteredStart());
    try {
        const res = await publicRequest.get(
            `/Product?FactoryId=${FactoryId}&StoreId=${StoreId}&ServiceCenterId=${ServiceCenterId}&Status=${Status}&ProductLineId=${ProductLineId}&Color=${Color}${Memory == 0? '' : `&Capacity=${Memory}`}`
        );
        dispatch(getProductsServiceCenterFilteredSuccess(res.data.items));
    } catch (err) {
        dispatch(getProductsServiceCenterFilteredFailure());
    }
};

export const getProductStore_ = async (
    dispatch,
    ProductLineId,
    FactoryId,
    StoreId,
    ServiceCenterId,
    Status,
    Color,
    Memory
) => {
    dispatch(getProductsStoreStart());

    try {
        const res = await publicRequest.get(
            // '/Product?PageNumber=1&PageSize=10&FactoryId=2&Status=InFactory&ProductLineId=0&Color=All&Capacity=64GB
            `/Product?FactoryId=${FactoryId}&StoreId=${StoreId}&ServiceCenterId=${ServiceCenterId}&Status=${Status}&ProductLineId=${ProductLineId}&Color=${Color}${Memory == 0? '' : `&Capacity=${Memory}`}`
        );
        dispatch(getProductsStoreSuccess(res.data.items));
    } catch (err) {
        dispatch(getProductsStoreFailure());
    }
};

export const getProductWarehouse = async (
    dispatch,
    ProductLineId,
    FactoryId,
    StoreId,
    ServiceCenterId,
    Status,
    Color,
    Memory
) => {
    dispatch(getProductsStart());

    try {
        const res = await publicRequest.get(
            // '/Product?PageNumber=1&PageSize=10&FactoryId=2&Status=InFactory&ProductLineId=0&Color=All&Capacity=64GB
            `/Product?FactoryId=${FactoryId}&StoreId=${StoreId}&ServiceCenterId=${ServiceCenterId}&Status=${Status}&ProductLineId=${ProductLineId}&Color=${Color}${Memory == 0? '' : `&Capacity=${Memory}`}`
        );
        dispatch(getProductsSuccess(res.data.items));
    } catch (err) {
        dispatch(getProductsFailure());
    }
};


export const getProductServiceCenter = async (
    dispatch,
    serviceCenterId,
    ProductLineId,
) => {
    dispatch(getProductsServiceCenterStart());
    try {
        const res = await publicRequest.get(
            `/Product?ServiceCenterId=${serviceCenterId}&Status=All&ProductLineId=${ProductLineId}`
        );
        dispatch(getProductsServiceCenterSuccess(res.data.items));
    } catch (err) {
        dispatch(getProductsServiceCenterFailure());
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

export const getFactoryProductError = async (
    dispatch,
    FactoryId
) => {
    dispatch(getErrorProductsFactoryStart());
    try {
        const res = await publicRequest.get(
            `/Product/?FactoryId=${FactoryId}&Status=Error`
        );
        dispatch(getErrorProductsFactorySuccess(res.data.items));
    } catch (err) {
        dispatch(getErrorProductsFactoryFailure());
    }
};