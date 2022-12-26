import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../../api/productsApi";
import { products } from "../../../dummyData";
import { getDate } from "../../../helper/getDate";
import { getDMY } from "../../../helper/getDMY";

export default function FeaturedInfo() {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.product.products);

  // useEffect(() => {
  //   getProducts(dispatch);
  // }, [dispatch]);
  // console.log(products);

  // const products = products;

  const date = new Date();
  const today = { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() }

  /**
   * Sold list
   */
  const thisMonthSold = products.filter((item, index) => {
    const soldDate = getDMY(item.soldDate)
    return soldDate.month == today.month
  });

  const lastMonthSold = products.filter((item, index) => {
    const soldDate = getDMY(item.soldDate)
    return (today.month == 1 ? soldDate.month == 12 : soldDate.month == today.month - 1)
  });
  const deviationSold = (thisMonthSold.length - lastMonthSold.length)

  /**
   * Manufactured list
   */
  const thisMonthManufactured = products.filter((item, index) => {
    const manufactureDate = getDMY(item.manufactureDate)
    return manufactureDate.month == today.month
  });
  const lastMonthManufactured = products.filter((item, index) => {
    const manufactureDate = getDMY(item.manufactureDate)
    return (today.month == 1 ? manufactureDate.month == 12 : manufactureDate.month == today.month - 1)
  });
  const deviationManufactured = thisMonthManufactured.length - lastMonthManufactured.length

  /**
   * Error list
   */
  const thisMonthError = products.filter((item, index) => {
    const errorDate = getDMY(item.warrantyDate)
    return errorDate.month == today.month
  });
  const lastMonthError = products.filter((item, index) => {
    const errorDate = getDMY(item.warrantyDate)
    return (today.month == 1 ? errorDate.month == 12 : errorDate.month == today.month - 1)
  });
  const deviationError = thisMonthError.length - lastMonthError.length
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Manufactured products</span>
        <div className="featuredContainer">
          <span className="featuredDescription">{deviationManufactured}</span>
          <span className="featuredDescriptionRate">
            {deviationManufactured >= 0 ? <div>+{deviationManufactured}</div> : deviationManufactured}
            {deviationManufactured > 0 ? (<ArrowUpward className="featuredIcon" />) : (deviationManufactured < 0 ? (<ArrowDownward className="featuredIcon negative" />) : <div className="featuredIcon equal">=</div>)}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sold products</span>
        <div className="featuredContainer">
          <span className="featuredDescription">{thisMonthSold.length}</span>
          <span className="featuredDescriptionRate">
            {deviationSold >= 0 ? <div>+{deviationSold}</div> : deviationSold}
            {deviationSold > 0 ? (<ArrowUpward className="featuredIcon" />) : (deviationSold < 0 ? (<ArrowDownward className="featuredIcon negative" />) : <div className="featuredIcon equal">=</div>)}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Error products</span>
        <div className="featuredContainer">
          <span className="featuredDescription">{deviationError}</span>
          <span className="featuredDescriptionRate">
            {deviationError >= 0 ? <div>+{deviationError}</div> : deviationError}
            {deviationError > 0 ? (<ArrowUpward className="featuredIcon" />) : (deviationError < 0 ? (<ArrowDownward className="featuredIcon negative" />) : <div className="featuredIcon equal">=</div>)}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
