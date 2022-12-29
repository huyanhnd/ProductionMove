import { createSlice } from "@reduxjs/toolkit";

export const currentStoreSlice = createSlice({
    name: "currentStore",
    initialState: {
        storeInfo: {},
    },
    reducers: {
        //GET ALL
        setCurrentStoreInfo: (state, action) => {
            state.storeInfo = action.payload
        }
    },
});

export const { setCurrentStoreInfo } = currentStoreSlice.actions;
export default currentStoreSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// export const currentStoreRequestSlice = createSlice({
//     name: "currentStoreRequest",
//     initialState: {
//         storeRequest: 0,
//     },
//     reducers: {
//         //GET ALL
//         setCurrentStoreRequest: (state, action) => {
//             state.storeRequest = action.payload
//         }
//     },
// });

// export const { setCurrentStoreRequest } = currentStoreRequestSlice.actions;
// export default currentStoreRequestSlice.reducer;
