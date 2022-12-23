import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "../../../../api/seriesApi";
import { getProductLines } from "../../../../api/productLineApi";
import { useEffect, useState } from "react";
import ProductLineItem from "./ProductLineItem";
import { productLineData } from "../../../../dummyData";
import "./productLine.css";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function ProductLine() {
  const [data, setData] = useState(productLineData);
  const dispatch = useDispatch();
  const productline = useSelector((state) => state.productline.productlines);
  const series = useSelector((state) => state.series.series);

  useEffect(() => {
    getSeries(dispatch);
    getProductLines(dispatch);
  }, [dispatch]);

  return (
    <div className="productLine">
      <div className="series">
        {series.map((item, index) => {
          return <button className="seriesItem">{item.name}</button>;
        })}
        <Link to={"/newProductLine/"}>
          <Add className="seriesItemAdd"></Add>
        </Link>
      </div>
      <div className="listItem">
        {data.map((item) => (
          <ProductLineItem data={item} />
        ))}
        <div>
          <div className="productline_link">
            <Add className="seriesItemAdd1" />
            <text className="textAdd">Thêm sản phẩm mới</text>
          </div>
        </div>
      </div>
    </div>
  );
}
