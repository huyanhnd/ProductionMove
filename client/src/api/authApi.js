import { loginFailure, loginStart, loginSuccess } from "../redux/authSlice";
import { publicRequest } from "./requestMethods";
import { setToken} from "../helper/auth"

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(`/Account/authenticate`, user)
    setToken(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};