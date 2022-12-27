import {createSlice} from "@reduxjs/toolkit";

export const processSlice = createSlice({
    name: "process",
    initialState: {
        // totalItems: 0,
        processes: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        getProcessesStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProcessesSuccess: (state, action) => {
            state.isFetching = false;
            state.processes = action.payload.items;
        },
        getProcessesFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        // postNewProductsStart: (state) => {
        //     state.isFetching = true;
        //     state.error = false;
        // },
        // postNewProductsSuccess: (state, action) => {
        //     state.isFetching = false;
        //     state.users.push(action.payload);
        // },
        // postNewProductsFailure: (state) => {
        //     state.isFetching = false;
        //     state.error = true;
        // },
    },
});

export const {
    getProcessesStart,
    getProcessesSuccess,
    getProcessesFailure,
    // postNewProductsFailure,
    // postNewProductsStart,
    // postNewProductsSuccess,
} = processSlice.actions;
export default processSlice.reducer;
