// import userReducer from "./userSlice";
// import seriesReducer from "./seriesSlice"
// import productLineReducer from "./productLineSlice"
// import authReducer from "./authSlice"
// import factoryReducer from "./factorySlice"
// import addressReducer from "./addressSlice"
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   whitelist: ['auth']
// };

// const rootReducer = combineReducers({ 
//   user: userReducer,
//   series: seriesReducer,
//   productline: productLineReducer,
//   auth: authReducer,
//   factory: factoryReducer,
//   address: addressReducer, 
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import seriesReducer from "./seriesSlice"
import productLineReducer from "./productLineSlice"
import authReducer from "./authSlice"
import factoryReducer from "./factorySlice"
import addressReducer from "./addressSlice"
import currentFactoryReducer from "./currentFactorySlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    series: seriesReducer,
    productline: productLineReducer,
    auth: authReducer,
    factory: factoryReducer,
    address: addressReducer,
    currentFactory: currentFactoryReducer,
  },
});