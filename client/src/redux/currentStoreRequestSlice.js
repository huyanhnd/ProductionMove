import { createSlice } from "@reduxjs/toolkit";

export const currentStoreRequestSlice = createSlice({
    name: "currentStoreRequest",
    initialState: {
        storeRequest: 0,
    },
    reducers: {
        //GET ALL
        setCurrentStoreRequest: (state, action) => {
            state.storeRequest = action.payload
        }
    },
});

export const { setCurrentStoreRequest } = currentStoreRequestSlice.actions;
export default currentStoreRequestSlice.reducer;
