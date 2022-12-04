import { createSlice } from "@reduxjs/toolkit";

export const seriesSlice = createSlice({
    name: "series",
    initialState: {
        series: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getSeriesStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getSeriesSuccess: (state, action) => {
            state.isFetching = false;
            state.series = action.payload;
        },
        getSeriesFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { getSeriesStart, getSeriesSuccess, getSeriesFailure } = seriesSlice.actions;
export default seriesSlice.reducer;
