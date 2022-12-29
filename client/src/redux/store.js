import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import seriesReducer from "./seriesSlice"
import productLineReducer from "./productLineSlice"
import authReducer from "./authSlice"
import factoryReducer from "./factorySlice"
import addressReducer from "./addressSlice"
import currentFactoryReducer from "./currentFactorySlice"
import currentStoreReducer from "./currentStoreSlice"
import currentServiceCenterReducer from "./currentServiceCenterSlice"
import productsReducer from "./productsSlice";
import storesReducer from "./storeSlice"
import serviceCentersReducer from "./serviceCenter"
import processSlice from "./processSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    series: seriesReducer,
    productline: productLineReducer,
    auth: authReducer,
    factory: factoryReducer,
    address: addressReducer,
    product: productsReducer, 
    store: storesReducer,
    serviceCenter: serviceCentersReducer,
    currentFactory: currentFactoryReducer,
    currentStore: currentStoreReducer,
    currentServiceCenter: currentServiceCenterReducer,
    process: processSlice,
  },
});