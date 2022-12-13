import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import seriesReducer from "./seriesSlice"
import productLineReducer from "./productLineSlice"
import authReducer from "./authSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    series: seriesReducer,
    productline: productLineReducer,
    auth: authReducer,
  },
});