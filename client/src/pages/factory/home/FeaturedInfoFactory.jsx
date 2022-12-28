import "./featuredInfoFactory.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../../api/productsApi";
import { getDMY } from "../../../helper/getDMY";
import { products } from "../../../dummyData";
import { Link } from "react-router-dom";
import { ArrowDownward, ArrowUpward, ErrorOutline, PrecisionManufacturing, ShoppingCart } from "@mui/icons-material";


/**
 * 
 * 
 * 
 * 
 * có data như t order thì bỏ comment 5 dòng đầu của component
 * 
 * với lại xóa cái products của dummyData ở import cuối đi nha 
 * 
 * cái này chưa filter lấy id của nhà máy đâu, tại ít quá biểu đồ hiện lên xấu lắm
 * 
 * 
 * 
 */

export default function FeaturedInfoHome() {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.product.products);

  // useEffect(() => {
  //   getProducts(dispatch);
  // }, [dispatch]);



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
      <div className="featuredItem_">
        <div className="left">
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
        <div className="right">
          <PrecisionManufacturing className="icon green"/>
          <Link to=''>View details</Link>
        </div>
      </div>
      <div className="blank"></div>
      <div className="featuredItem_">
        <div className="left">
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
        <div className="right">
          <ShoppingCart className="icon yellow"/>
          <Link to=''>View details</Link>
        </div>
      </div>
      <div className="blank"></div>
      <div className="featuredItem_">
        <div className="left">
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
        <div className="right">
          <ErrorOutline className="icon red"/>
          <Link to=''>View details</Link>
        </div>
      </div>
    </div>
  );
}
