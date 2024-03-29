import FeaturedInfo from "../../../components/featuredInfo/FeaturedInfo";
import { getDMY } from "../../../helper/getDMY";
import ChartStatistic from "../../../components/chart/ChartStatistic";
import "./storeHome.css";
import { useDispatch, useSelector } from "react-redux";
import { getStore } from "../../../api/storesApi";
import { getProducts } from "../../../api/productsApi";
import { useEffect } from "react";
import DbChartStatistic from "../../../components/chart/DbChartStatistic";
import { getUsers } from "../../../api/userApi";
import { products_ } from "../../../dummyData";

const StoreHome = () => {
    /**
       * get all data
       */
    const dispatch = useDispatch();
    useEffect(() => {
        getStore(dispatch)
        getProducts(dispatch)
        getUsers(dispatch)
    }, [dispatch]);
    const products = useSelector((state) => state.product.products);
    const stores = useSelector((state) => state.store.stores);
    /**
      * get data's store
      */
    const auth = useSelector((state) => state.auth.currentUser);
    const storeId = auth.managementId
    // const products_ = products.filter((item) => { return item.storeId == storeId })
    console.log(products_);


    const date = new Date();
    const today = { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear() }
    // const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var monthsData = []
    for (let i = 0; i < 12; ++i) {
        monthsData.push({
            month: `Tháng ${i + 1}`,
            quantityOfSold: 0,
            quantityOfError: 0,
        });
    }
    // const quater = [1,3,4,5]
    var quatersData = []
    for (let i = 0; i < 4; ++i) {
        quatersData.push({
            quater: `Quý ${i + 1}`,
            quantityOfSold: 0,
            quantityOfError: 0,
        });
    }
    var yearsData = []
    for (let i = today.year; i >= today.year - 5; --i) {
        yearsData = [{
            year: `Năm ${i}`,
            quantityOfSold: 0,
            quantityOfError: 0,
        }, ...yearsData]
    }
    /**
     * for mat chart data
     */
    for (let i = 0; i < products_.length; ++i) {
        const sold = getDMY(products_[i].soldDate).month
        const error = getDMY(products_[i].errorDate).month

        for (let i = 0; i < monthsData.length; ++i) {
            if (parseInt(sold) == monthsData[i].month.split(' ')[1] && getDMY(products_[i].soldDate).year == today.year) monthsData[i].quantityOfSold++
            if (parseInt(error) == monthsData[i].month.split(' ')[1] && getDMY(products_[i].errorDate).year == today.year) monthsData[i].quantityOfError++
        }
    }

    var y = 0;
    for (let i = 0; i < quatersData.length; ++i) {
        quatersData[i].quantityOfSold = monthsData[y].quantityOfSold + monthsData[y + 1].quantityOfSold + monthsData[y + 2].quantityOfSold
        quatersData[i].quantityOfError = monthsData[y].quantityOfError + monthsData[y + 1].quantityOfError + monthsData[y + 2].quantityOfError
        y = y + 3
    }

    for (let i = 0; i < products_.length; ++i) {
        const sold = getDMY(products_[i].soldDate).year
        const error = getDMY(products_[i].errorDate).year
        for (let i = 0; i < yearsData.length; ++i) {
            if (parseInt(sold) == yearsData[i].year.split(' ')[1]) yearsData[i].quantityOfSold++
            if (parseInt(error) == yearsData[i].year.split(' ')[1]) yearsData[i].quantityOfError++
        }
    }
    return (
        <div className="homeStore">
            <div className="store-content">
                <FeaturedInfo type='store' data={products_} />
                <div className="chart-store">
                    <h3 className="chart-title_">Monthly Statistics</h3>
                    <div className='chart-content'>
                        <DbChartStatistic data={monthsData} dataKey={{ name: "month", value1: 'quantityOfSold', value2: 'quantityOfError' }} />
                    </div>
                </div>
                <div className="chart-store">
                    <h3 className="chart-title_">Quarterly Statistics</h3>
                    <div className='chart-content'>
                        <DbChartStatistic data={quatersData} dataKey={{ name: "quater", value1: 'quantityOfSold', value2: 'quantityOfError' }} />
                    </div>
                </div>
                <div className="chart-store">
                    <h3 className="chart-title_">Yearly Statistics</h3>
                    <div className='chart-content'>
                        <DbChartStatistic data={yearsData} dataKey={{ name: "year", value1: 'quantityOfSold', value2: 'quantityOfError' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreHome;
