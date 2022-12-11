import "./series.css";
import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "../../api/seriesApi";
import { useEffect } from "react";
import SeriItem from "./SeriItem";
import "./series.css"

export default function Series() {
    const dispatch = useDispatch();
    const series = useSelector((state) => state.series.series);

    useEffect(() => {
        getSeries(dispatch);
    }, [dispatch]);

    return (
        <div className="seriesPage">
            {series.map((item,index) => {
                return <SeriItem data={item} key={index}/>
            })}
        </div>
    )
}