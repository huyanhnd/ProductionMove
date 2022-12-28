import FeaturedInfo from "../../../components/featuredInfo/FeaturedInfo";
import { products_, yearlyData } from "../../../dummyData";
import { getDMY } from "../../../helper/getDMY";
import ChartStatistic from "../../../components/chart/ChartStatistic";
import "./storeHome.css";

const StoreHome = () => {
    const date = new Date();
    const today = { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() }
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

    for (let i = 0; i < products_.length; ++i) {
        const sold = getDMY(products_[i].soldDate).month
        const error = getDMY(products_[i].errorDate).month

        for (let i = 0; i < monthsData.length; ++i) {
            console.log(monthsData[i].month.split(' ')[1]);
            if (parseInt(sold) == monthsData[i].month.split(' ')[1]) monthsData[i].quantityOfSold++
            if (parseInt(error) == monthsData[i].month.split(' ')[1]) monthsData[i].quantityOfError++
        }
    }

    console.log(monthsData);
    var y = 0;
    for (let i = 0; i < quatersData.length; ++i) {
        quatersData[i].quantityOfSold = monthsData[y].quantityOfSold + monthsData[y + 1].quantityOfSold + monthsData[y + 2].quantityOfSold
        quatersData[i].quantityOfManufacture = monthsData[y].quantityOfManufacture + monthsData[y + 1].quantityOfManufacture + monthsData[y + 2].quantityOfManufacture
        quatersData[i].quantityOfError = monthsData[y].quantityOfError + monthsData[y + 1].quantityOfError + monthsData[y + 2].quantityOfError
        y = y + 3
    }

    return (
        <div className="homeStore">
            <div className="store-content">
                <FeaturedInfo type='store' data={products_} />
                <div className="chart-store">
                    <h3 className="chart-title_">Monthly Statistics</h3>
                    <div className='chart-content'>
                        <ChartStatistic data={monthsData} dataKey={{ name: "month", value1: 'quantityOfSold', value2: "quantityOfManufacture", value3: 'quantityOfError' }} />
                    </div>
                </div>
                <div className="chart-store">
                    <h3 className="chart-title_">Monthly Statistics</h3>
                    <div className='chart-content'>
                        <ChartStatistic data={quatersData} dataKey={{ name: "quater", value1: 'quantityOfSold', value2: "quantityOfManufacture", value3: 'quantityOfError' }} />
                    </div>
                </div>
                <div className="chart-store">
                    <h3 className="chart-title_">Monthly Statistics</h3>
                    <div className='chart-content'>
                        <ChartStatistic data={yearlyData} dataKey={{ name: "year", value1: 'quantityOfSold', value2: "quantityOfManufacture", value3: 'quantityOfError' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreHome;
