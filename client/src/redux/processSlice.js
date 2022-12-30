import {createSlice} from "@reduxjs/toolkit";

export const processSlice = createSlice({
    name: "process",
    initialState: {
        // totalItems: 0,
        processes: [],
        isFetching: false,
        error: false,
        exportList: [],
        importRequest: [],
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
        postProcessStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        postProcessSuccess: (state, action) => {
            state.isFetching = false;
        },
        postProcessFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        changeExportList: (state,action) => {
            state.exportList = action.payload;
        },
        changeImportRequest: (state, action) => {
            state.importRequest = action.payload;
        }
    },
});

export const {
    getProcessesStart,
    getProcessesSuccess,
    getProcessesFailure,
    postProcessFailure,
    postProcessStart,
    postProcessSuccess,
    changeExportList,
    changeImportRequest,
} = processSlice.actions;
export default processSlice.reducer;