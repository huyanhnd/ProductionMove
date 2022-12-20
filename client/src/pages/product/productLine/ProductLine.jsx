import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "../../../api/seriesApi";
import { getProductLines } from "../../../api/productLineApi";
import { useEffect, useState } from "react";
import ProductLineItem from "./ProductLineItem";
import { productLineData } from "../../../dummyData";
import "./productLine.css";

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
      </div>
      <div className="listItem">
        {productline.map((item, index) => {
          return <ProductLineItem data={item} key={index} />;
        })}
      </div>

      <div className="productline_slider">
        <div className="productline_info">
          <div className="productline_link">
            <div className="productline_img">
              {/* <img className="imgsize" src={data.img}></img> */}
              <img
                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png"
                width="358"
                height="358"
                alt="iPhone 14 Pro Max 128GB | Chính hãng VN/A"
                class="product__img"
              ></img>
            </div>
            <div className="productline_item_text">
              <div className="productline_name">
                {/* <h3>{data.name}</h3> */}
                {data.map((item, index) => {
                  return <h3>{item.name}</h3>;
                })}
              </div>
              <div className="productline_badge">
                <p className="productline_more">6.7 inches</p>
                <p className="productline_more">6 GB</p>
                <p className="productline_more">128 GB</p>
              </div>
              <div className="productline_price">32.990.000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
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
*/
