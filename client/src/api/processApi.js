import {useSelector} from "react-redux";
import {
    getProcessesStart,
    getProcessesSuccess,
    getProcessesFailure,
    postProcessFailure,
    postProcessStart,
    postProcessSuccess
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

export const postProcess = async (dispatch, process) => {
    dispatch(postProcessStart());
    try {
        const res = await publicRequest.post(`/Process`, process);
        dispatch(postProcessSuccess(res.data));
    } catch (err) {
        dispatch(postProcessFailure());
    }
};