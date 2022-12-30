import FeaturedInfo from "../../../components/featuredInfo/FeaturedInfo";
import { getDMY } from "../../../helper/getDMY";
import ChartStatistic from "../../../components/chart/ChartStatistic";
import "./factoryHome.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../api/productsApi";
import { useEffect } from "react";
import { getUsers } from "../../../api/userApi";

const FactoryHome = () => {
    /**
     * get all data
     */
    const dispatch = useDispatch();
    useEffect(() => {
        getProducts(dispatch)
        getUsers(dispatch)
    }, [dispatch]);
    const products = useSelector((state) => state.product.products);
    /**
     * get data's factory
     */
    const auth = useSelector((state) => state.auth.currentUser);
    const factoryId = auth.managementId
    const productData = products.filter((item) => { return item.factoryId == factoryId })
    // console.log(productData);

    const date = new Date();
    const today = { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear() }
    // const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var monthsData = []
    for (let i = 0; i < 12; ++i) {
        monthsData.push({
            month: `Tháng ${i + 1}`,
            quantityOfSold: 0,
            quantityOfManufacture: 0,
            quantityOfError: 0,
        });
    }
    // const quater = [1,3,4,5]
    var quatersData = []
    for (let i = 0; i < 4; ++i) {
        quatersData.push({
            quater: `Quý ${i + 1}`,
            quantityOfSold: 0,
            quantityOfManufacture: 0,
            quantityOfError: 0,
        });
    }
    //year
    var yearsData = []
    for (let i = today.year; i >= today.year - 5; --i) {
        yearsData = [{
            year: `Năm ${i}`,
            quantityOfSold: 0,
            quantityOfManufacture: 0,
            quantityOfError: 0,
        },...yearsData]
    }
    console.log(yearsData);
    // format data for chart
    for (let i = 0; i < productData.length; ++i) {        
        const sold = getDMY(productData[i].soldDate).month
        const manufacture = getDMY(productData[i].manufactureDate).month
        const error = getDMY(productData[i].errorDate).month
        if (sold.year == '0001' || manufacture.year == '0001' || error.year == '0001') break
        for (let i = 0; i < monthsData.length; ++i) {
            if (parseInt(sold) == monthsData[i].month.split(' ')[1] && getDMY(productData[i].soldDate).year == today.year) monthsData[i].quantityOfSold++
            if (parseInt(manufacture) == monthsData[i].month.split(' ')[1] && getDMY(productData[i].manufactureDate).year == today.year) monthsData[i].quantityOfManufacture++
            if (parseInt(error) == monthsData[i].month.split(' ')[1] && getDMY(productData[i].errorDate).year == today.year) monthsData[i].quantityOfError++
        }
    }
    
    var y = 0;
    for (let i = 0; i < quatersData.length; ++i) {
        quatersData[i].quantityOfSold = monthsData[y].quantityOfSold + monthsData[y + 1].quantityOfSold + monthsData[y + 2].quantityOfSold
        quatersData[i].quantityOfManufacture = monthsData[y].quantityOfManufacture + monthsData[y + 1].quantityOfManufacture + monthsData[y + 2].quantityOfManufacture
        quatersData[i].quantityOfError = monthsData[y].quantityOfError + monthsData[y + 1].quantityOfError + monthsData[y + 2].quantityOfError
        y = y + 3
    }

    for (let i = 0; i < productData.length; ++i) {
        const sold = getDMY(productData[i].soldDate).year
        const manufacture = getDMY(productData[i].manufactureDate).year
        const error = getDMY(productData[i].errorDate).year
        if (sold.year == '0001' || manufacture.year == '0001' || error.year == '0001') break
        for (let i = 0; i < yearsData.length; ++i) {
            if (parseInt(sold) == yearsData[i].year.split(' ')[1]) yearsData[i].quantityOfSold++
            if (parseInt(manufacture) == yearsData[i].year.split(' ')[1]) yearsData[i].quantityOfManufacture++
            if (parseInt(error) == yearsData[i].year.split(' ')[1]) yearsData[i].quantityOfError++
        }
    }
    

    return (
        <div className="homeStore">
            <div className="store-content">
                <FeaturedInfo type='product' data={productData} />
                <div className="chart-store">
                    <h3 className="chart-title_">Monthly Statistics</h3>
                    <div className='chart-content'>
                        <ChartStatistic data={monthsData} dataKey={{ name: "month", value1: 'quantityOfSold', value2: "quantityOfManufacture", value3: 'quantityOfError' }} />
                    </div>
                </div>
                <div className="chart-store">
                    <h3 className="chart-title_">Quarterly Statistics</h3>
                    <div className='chart-content'>
                        <ChartStatistic data={quatersData} dataKey={{ name: "quater", value1: 'quantityOfSold', value2: "quantityOfManufacture", value3: 'quantityOfError' }} />
                    </div>
                </div>
                <div className="chart-store">
                    <h3 className="chart-title_">Yearly Statistics</h3>
                    <div className='chart-content'>
                        <ChartStatistic data={yearsData} dataKey={{ name: "year", value1: 'quantityOfSold', value2: "quantityOfManufacture", value3: 'quantityOfError' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FactoryHome;
