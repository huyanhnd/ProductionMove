import { useSelector } from "react-redux";
import {
    getStoresStart,
    getStoresSuccess,
    getStoresFailure,
} from "../redux/storesSlice";
import { publicRequest } from "./requestMethods";

export const getStores = async (dispatch) => {
    dispatch(getStoresStart());
    try {
        const res = await publicRequest.get(`/Store`);
        dispatch(getStoresSuccess(res.data.items));
    } catch (err) {
        dispatch(getStoresFailure());
    }
};
