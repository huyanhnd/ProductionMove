import {useSelector} from "react-redux";
import {
    getProcessesStart,
    getProcessesSuccess,
    getProcessesFailure,
} from "../redux/processSlice";
import {publicRequest} from "./requestMethods";

export const getProcesses = async (dispatch) => {
    dispatch(getProcessesStart());
    try {
        const res = await publicRequest.get(`/Process`);
        dispatch(getProcessesSuccess(res.data));
    } catch (err) {
        dispatch(getProcessesFailure());
    }
};