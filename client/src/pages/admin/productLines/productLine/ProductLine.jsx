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

  const [items, setItems] = useState([]);

  useEffect(() => {
    getSeries(dispatch);
    getProductLines(dispatch);
    setItems(productlines.filter((pl) => pl.seriesId === 1));
  }, [dispatch]);

  const handleClick = (id) => {
    setItems(productlines.filter((pl) => pl.seriesId === id));
  }

  // const [productline, setProductline] = useState('0')
  // const handleProductlineChange = (e) => {
  //   setProductline(e.target.value)
  // }

  return (
    <div className="productLine">
      <div className="series">
        {series.map((item, index) => {
          return <button className="seriesItem" onClick={() => handleClick(item.id)}>{item.name}</button>;
        })}
        {/* <Link to={"/newProductLine/"}>
          <Add className="seriesItemAdd"></Add>
        </Link> */}
      </div>
      <div className="listItem">
        {items.map((item, index) => (
          <ProductLineItem data={item} key={index} />
        ))}
        {/* <Link to={"/newproductline/"} className="productline_link">
          <div className="seriesItemAdd1">+</div>
          <div className="textAdd">Thêm sản phẩm mới</div>
        </Link> */}
      </div>
    </div>
  )
}
