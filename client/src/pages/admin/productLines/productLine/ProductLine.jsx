import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "../../../../api/seriesApi";
import { getProductLines } from "../../../../api/productLineApi";
import { useEffect, useState } from "react";
import ProductLineItem from "./ProductLineItem";
import "./productLine.css";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function ProductLine() {
  // const [data, setData] = useState(productLineData);
  const dispatch = useDispatch();
  const productlines = useSelector((state) => state.productline.productlines);
  const series = useSelector((state) => state.series.series);

  useEffect(() => {
    getSeries(dispatch);
    getProductLines(dispatch);
  }, [dispatch]);

  // const [productline, setProductline] = useState('0')
  // const handleProductlineChange = (e) => {
  //   setProductline(e.target.value)
  // }

  console.log(productlines);

  return (
    <div className="productLine">
      <div className="series">
        {series.map((item, index) => {
          return <button className="seriesItem">{item.name}</button>;
        })}
        {/* <Link to={"/newProductLine/"}>
          <Add className="seriesItemAdd"></Add>
        </Link> */}
      </div>
      <div className="listItem">
        {productlines.map((item, index) => (
          <ProductLineItem data={item} key={index} />
        ))}
          <Link to={"/newproductline/"} className="productline_link">
            <div className="seriesItemAdd1">+</div>
            <text className="textAdd">Thêm sản phẩm mới</text>
          </Link>
      </div>
    </div>
  )
}
