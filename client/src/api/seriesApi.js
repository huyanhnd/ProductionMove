import {
    getSeriesStart,
    getSeriesSuccess,
    getSeriesFailure,
} from "../redux/seriesSlice";
import { publicRequest } from "./requestMethods";

export const getSeries = async (dispatch) => {
    dispatch(getSeriesStart());
    try {
        const res = await publicRequest.get(`/series`);
        dispatch(getSeriesSuccess(res.data));
    } catch (err) {
        dispatch(getSeriesFailure());
    }
};