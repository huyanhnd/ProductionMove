
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import seriesReducer from "./seriesSlice"
import productLineReducer from "./productLineSlice"
import authReducer from "./authSlice"
import factoryReducer from "./factorySlice"
import addressReducer from "./addressSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    series: seriesReducer,
    productline: productLineReducer,
    auth: authReducer,
    factory: factoryReducer,
    address: addressReducer,
  },
});