import {
    getUsersStart,
    getUsersSuccess,
    getUsersFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    addUserStart,
    addUserSuccess,
    addUserFailure,
} from "../redux/userRedux";
import axios from "axios";
import { userRequest } from "./requestMethods"
import { getToken } from "../helper/auth";

//User
export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await userRequest(getToken()).get(`/Account`);
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailure());
    }
};

export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
        // const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteUserSuccess(id));
    } catch (err) {
        dispatch(deleteUserFailure());
    }
};

export const updateUser = async (id, User, dispatch) => {
    dispatch(updateUserStart());
    try {
        // update
        dispatch(updateUserSuccess({ id, User }));
    } catch (err) {
        dispatch(updateUserFailure());
    }
};
export const addUser = async (User, dispatch) => {
    dispatch(addUserStart());
    try {
        const res = await userRequest.post(`/products`, User);
        dispatch(addUserSuccess(res.data));
    } catch (err) {
        dispatch(addUserFailure());
    }
};
