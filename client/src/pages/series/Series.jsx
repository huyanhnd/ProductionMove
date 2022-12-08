import "./series.css";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "../../redux/apiCalls";
import { useEffect, useState } from "react";
import "./series.css"

export default function Series() {
    // const dispatch = useDispatch();
    // const series = useSelector((state) => state.series.series);

    // useEffect(() => {
    //     getSeries(dispatch);
    // }, [dispatch]);

    const series = seriesData;
    console.log(series);
    return (
        <div className="seriesPage">
            {seriesData.map((item,index) => {
                return <SeriItem data={item} key={index}/>
            })}
        </div>
    )
}