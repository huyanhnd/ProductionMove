import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "../../../api/seriesApi";
import { getProductLines } from "../../../api/productLineApi";
import { useEffect } from "react";
import ProductLineItem from "./ProductLineItem";
import "./productLine.css"

export default function ProductLine() {
    const dispatch = useDispatch();
    const productline = useSelector((state) => state.productline.productlines);
    const series = useSelector((state) => state.series.series)

    useEffect(() => {
        getSeries(dispatch);
        getProductLines(dispatch);
    }, [dispatch]);

    return (
        <div className="productLine">
            <div className="series">
                {series.map((item, index) => {
                    return (
                        <button className="seriesItem">{item.name}</button>
                    )
                })}
            </div>
            <div className="listItem">
                {productline.map((item, index) => {
                    return (
                       <ProductLineItem data={item} key={index} />
                    )
                })}
            </div>
        </div>
    )
}