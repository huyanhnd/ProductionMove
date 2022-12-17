import { createSlice } from "@reduxjs/toolkit";

export const currentFactorySlice = createSlice({
    name: "currentFactory",
    initialState: {
        factoryInfo: {},
    },
    reducers: {
        //GET ALL
        setCurrentFactoryInfo: (state, action) => {
            state.factoryInfo = action.payload
        }
    },
});

export const { setCurrentFactoryInfo } = currentFactorySlice.actions;
export default currentFactorySlice.reducer;
