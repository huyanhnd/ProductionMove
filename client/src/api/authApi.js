import { loginFailure, loginStart, loginSuccess } from "../redux/authRedux";
import { publicRequest } from "./requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(`/Account/authenticate`, user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};