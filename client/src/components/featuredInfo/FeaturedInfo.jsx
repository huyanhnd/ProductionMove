import "./featuredInfo.css";
import { Link } from "react-router-dom";
import { ArrowDownward, ArrowUpward, ErrorOutline, MonetizationOn, PrecisionManufacturing, ShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDMY } from "../../helper/getDMY";
/**
 * 
 * 
 * 
 * 
 * có data như t order thì bỏ comment 5 dòng đầu của component
 * với lại xóa cái products của dummyData ở import cuối đi nha 
 * 
 * 
 * 
 * 
 * 
 */

export default function FeaturedInfo({ type, data }) {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.product.products);

  // useEffect(() => {
  //   getProducts(dispatch);
  // }, [dispatch]);

  const date = new Date();
  const today = { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() }

  switch (type) {
    case "product":
      /**
  * Sold list
  */
      const thisMonthSold = data.filter((item, index) => {
        const soldDate = getDMY(item.soldDate)
        return soldDate.month == today.month
      });

      const lastMonthSold = data.filter((item, index) => {
        const soldDate = getDMY(item.soldDate)
        return (today.month == 1 ? soldDate.month == 12 : soldDate.month == today.month - 1)
      });
      const deviationSold = (thisMonthSold.length - lastMonthSold.length)

      /**
       * Manufactured list
       */
      const thisMonthManufactured = data.filter((item, index) => {
        const manufactureDate = getDMY(item.manufactureDate)
        return manufactureDate.month == today.month
      });
      const lastMonthManufactured = data.filter((item, index) => {
        const manufactureDate = getDMY(item.manufactureDate)
        return (today.month == 1 ? manufactureDate.month == 12 : manufactureDate.month == today.month - 1)
      });
      const deviationManufactured = thisMonthManufactured.length - lastMonthManufactured.length

      /**
       * Error list
       */
      const thisMonthError = data.filter((item, index) => {
        const errorDate = getDMY(item.warrantyDate)
        return errorDate.month == today.month
      });
      const lastMonthError = data.filter((item, index) => {
        const errorDate = getDMY(item.warrantyDate)
        return (today.month == 1 ? errorDate.month == 12 : errorDate.month == today.month - 1)
      });
      const deviationError = thisMonthError.length - lastMonthError.length
      return (
        <div className="featured">
          <div className="featuredItem">
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
              <PrecisionManufacturing className="icon green" />
              <Link to=''>View details</Link>
            </div>
          </div>
          <div className="blank"></div>
          <div className="featuredItem">
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
              <ShoppingCart className="icon yellow" />
              <Link to=''>View details</Link>
            </div>
          </div>
          <div className="blank"></div>
          <div className="featuredItem">
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
              <ErrorOutline className="icon red" />
              <Link to=''>View details</Link>
            </div>
          </div>
        </div>
      );
      break;


    case "store":
      /**
* Sold list
*/
      const thisMonthSold_ = data.filter((item, index) => {
        const soldDate = getDMY(item.soldDate)
        return soldDate.month == today.month
      });

      const lastMonthSold_ = data.filter((item, index) => {
        const soldDate = getDMY(item.soldDate)
        return (today.month == 1 ? soldDate.month == 12 : soldDate.month == today.month - 1)
      });
      const deviationSold_ = (thisMonthSold_.length - lastMonthSold_.length)


      /**
       * daonh thu
       */
      let initialValue1 = 0
      const thisEarnning = thisMonthSold_.reduce(function (total, currentValue) {
        return total + parseInt(currentValue.price);
      }, initialValue1);

      let initialValue2 = 0
      const lastEarnning = lastMonthSold_.reduce(function (total, currentValue) {
        return total + parseInt(currentValue.price);
      }, initialValue2);
      
      const deviationEarnning = thisEarnning - lastEarnning
      console.log(thisEarnning,lastEarnning,deviationEarnning);

      /**
       * Error list
       */
      const thisMonthError_ = data.filter((item, index) => {
        const errorDate = getDMY(item.warrantyDate)
        return errorDate.month == today.month
      });
      const lastMonthError_ = data.filter((item, index) => {
        const errorDate = getDMY(item.warrantyDate)
        return (today.month == 1 ? errorDate.month == 12 : errorDate.month == today.month - 1)
      });
      const deviationError_ = thisMonthError_.length - lastMonthError_.length
      return (
        <div className="featured">
          <div className="featuredItem">
            <div className="left">
              <span className="featuredTitle">Earnning</span>
              <div className="featuredContainer">
                <span className="featuredDescription">${thisEarnning}</span>
                <span className="featuredDescriptionRate">
                  {deviationEarnning >= 0 ? <div>+ ${deviationEarnning}</div> : deviationEarnning}
                  {deviationEarnning > 0 ? (<ArrowUpward className="featuredIcon" />) : (deviationEarnning < 0 ? (<ArrowDownward className="featuredIcon negative" />) : <div className="featuredIcon equal">=</div>)}
                </span>
              </div>
              <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="right">
              <MonetizationOn className="icon green" />
              <Link to=''>View details</Link>
            </div>
          </div>
          <div className="blank"></div>
          <div className="featuredItem">
            <div className="left">
              <span className="featuredTitle">Sold products</span>
              <div className="featuredContainer">
                <span className="featuredDescription">{thisMonthSold_.length}</span>
                <span className="featuredDescriptionRate">
                  {deviationSold_ >= 0 ? <div>+{deviationSold_}</div> : deviationSold_}
                  {deviationSold_ > 0 ? (<ArrowUpward className="featuredIcon" />) : (deviationSold_ < 0 ? (<ArrowDownward className="featuredIcon negative" />) : <div className="featuredIcon equal">=</div>)}
                </span>
              </div>
              <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="right">
              <ShoppingCart className="icon yellow" />
              <Link to=''>View details</Link>
            </div>
          </div>
          <div className="blank"></div>
          <div className="featuredItem">
            <div className="left">
              <span className="featuredTitle">Error products</span>
              <div className="featuredContainer">
                <span className="featuredDescription">{deviationError_}</span>
                <span className="featuredDescriptionRate">
                  {deviationError_ >= 0 ? <div>+{deviationError_}</div> : deviationError_}
                  {deviationError_ > 0 ? (<ArrowUpward className="featuredIcon" />) : (deviationError_ < 0 ? (<ArrowDownward className="featuredIcon negative" />) : <div className="featuredIcon equal">=</div>)}
                </span>
              </div>
              <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="right">
              <ErrorOutline className="icon red" />
              <Link to=''>View details</Link>
            </div>
          </div>
        </div>
      );
      break;




































































































































      
    case "serviceCenter":
      case "product":
        /**
    * đã nhận vào
    */
        const thisMonthWarranty = data.filter((item, index) => {
          const warrantyDate = getDMY(item.warrantyDate)
          return warrantyDate.month == today.month
        });
  
        const lastMonthWarranty = data.filter((item, index) => {
          const warrantyDate = getDMY(item.warrantyDate)
          return (today.month == 1 ? warrantyDate.month == 12 : warrantyDate.month == today.month - 1)
        });
        const deviationWarranty = (thisMonthWarranty.length - lastMonthWarranty.length)
  
        /**
         * đang bảo hành
         */

        let initialValue = 0
      const thisInWarranty = thisMonthWarranty.reduce(function (total, currentValue) {
        return total + (currentValue.status == 'InWarranty' ? 1 : 0);
      }, initialValue);

      initialValue = 0
      const lastInWarranty = lastMonthWarranty.reduce(function (total, currentValue) {
        return total + (currentValue.status == 'InWarranty' ? 1 : 0);
      }, initialValue);
        const deviationInWarranty = thisInWarranty - lastInWarranty
  
        /**
         * sp lỗi
         */
        const thisMonthError__ = data.filter((item, index) => {
          const errorDate = getDMY(item.warrantyDate)
          return errorDate.month == today.month
        });
        const lastMonthError__ = data.filter((item, index) => {
          const errorDate = getDMY(item.warrantyDate)
          return (today.month == 1 ? errorDate.month == 12 : errorDate.month == today.month - 1)
        });


        const deviationError__ = thisMonthError__.length - lastMonthError__.length
        return (
          <div className="featured">
            <div className="featuredItem">
              <div className="left">
                <span className="featuredTitle">Total of Products received</span>
                <div className="featuredContainer">
                  <span className="featuredDescription">{thisMonthWarranty.length}</span>
                  <span className="featuredDescriptionRate">
                    {deviationInWarranty >= 0 ? <div>+{deviationInWarranty}</div> : deviationInWarranty}
                    {deviationInWarranty > 0 ? (<ArrowUpward className="featuredIcon" />) : (deviationInWarranty < 0 ? (<ArrowDownward className="featuredIcon negative" />) : <div className="featuredIcon equal">=</div>)}
                  </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
              </div>
              <div className="right">
                <PrecisionManufacturing className="icon green" />
                <Link to=''>View details</Link>
              </div>
            </div>
            <div className="blank"></div>
            <div className="featuredItem">
              <div className="left">
                <span className="featuredTitle">In warranty products</span>
                <div className="featuredContainer">
                  <span className="featuredDescription">{thisInWarranty}</span>
                  <span className="featuredDescriptionRate">
                    {deviationInWarranty >= 0 ? <div>+{deviationInWarranty}</div> : deviationInWarranty}
                    {deviationInWarranty > 0 ? (<ArrowUpward className="featuredIcon" />) : (deviationInWarranty < 0 ? (<ArrowDownward className="featuredIcon negative" />) : <div className="featuredIcon equal">=</div>)}
                  </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
              </div>
              <div className="right">
                <ShoppingCart className="icon yellow" />
                <Link to=''>View details</Link>
              </div>
            </div>
            <div className="blank"></div>
            <div className="featuredItem">
              <div className="left">
                <span className="featuredTitle">Error product</span>
                <div className="featuredContainer">
                  <span className="featuredDescription">{thisMonthError__.length}</span>
                  <span className="featuredDescriptionRate">
                    {deviationError__ >= 0 ? <div>+{deviationError__}</div> : deviationError__}
                    {deviationError__ > 0 ? (<ArrowUpward className="featuredIcon" />) : (deviationError__ < 0 ? (<ArrowDownward className="featuredIcon negative" />) : <div className="featuredIcon equal">=</div>)}
                  </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
              </div>
              <div className="right">
                <ErrorOutline className="icon red" />
                <Link to=''>View details</Link>
              </div>
            </div>
          </div>
        );
        break;
  
  
      break;

    default:
      return (<></>)
      break;
  }

}
