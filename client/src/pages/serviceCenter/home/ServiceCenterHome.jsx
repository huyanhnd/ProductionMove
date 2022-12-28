import FeaturedInfo from "../../../components/featuredInfo/FeaturedInfo";
import { products_, yearlyData } from "../../../dummyData";
import { getDMY } from "../../../helper/getDMY";
import ChartStatistic from "../../../components/chart/ChartStatistic";
import "./serviceCenterHome.css";

const ServiceCenterHome = () => {
    const date = new Date();
    const today = { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() }
    // const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var monthsData = []
    for (let i = 0; i < 12; ++i) {
        monthsData.push({
            month: `Tháng ${i + 1}`,
            quantityOfRecieved: 0,
            quantityOfError: 0,
        });
    }
    // const quater = [1,3,4,5]
    var quatersData = []
    for (let i = 0; i < 4; ++i) {
        quatersData.push({
            quater: `Quý ${i + 1}`,
            quantityOfRecieved: 0,
            quantityOfError: 0,
        });
    }

    for (let i = 0; i < products_.length; ++i) {
        const Recieved = getDMY(products_[i].warrantyDate).month
        const error = getDMY(products_[i].errorDate).month
        for (let i = 0; i < monthsData.length; ++i) {
            if (parseInt(Recieved) == monthsData[i].month.split(' ')[1]) monthsData[i].quantityOfRecieved++
            if (parseInt(error) == monthsData[i].month.split(' ')[1]) monthsData[i].quantityOfError++
        }
    }
    var y = 0;
    for (let i = 0; i < quatersData.length; ++i) {
        quatersData[i].quantityOfRecieved = monthsData[y].quantityOfRecieved + monthsData[y + 1].quantityOfRecieved + monthsData[y + 2].quantityOfRecieved
        quatersData[i].quantityOfError = monthsData[y].quantityOfError + monthsData[y + 1].quantityOfError + monthsData[y + 2].quantityOfError
        y = y + 3
    }
    console.log(quatersData);

    return (
        <div className="homeStore">
            <div className="store-content">
                <FeaturedInfo type='serviceCenter' data={products_} />
                <div className="chart-store">
                    <h3 className="chart-title_">Monthly Statistics</h3>
                    <div className='chart-content'>
                        <ChartStatistic data={monthsData} dataKey={{ name: "month", value1: 'quantityOfRecieved', value2: "", value3: "quantityOfError" }} />
                    </div>
                </div>
                <div className="chart-store">
                    <h3 className="chart-title_">Quarterly Statistics</h3>
                    <div className='chart-content'>
                        <ChartStatistic data={quatersData} dataKey={{ name: "quater", value1: 'quantityOfRecieved', value2: "", value3: "quantityOfError" }} />
                    </div>
                </div>
                <div className="chart-store">
                    <h3 className="chart-title_">Yearly Statistics</h3>
                    <div className='chart-content'>
                        <ChartStatistic data={yearlyData} dataKey={{ name: "year", value1: 'quantityOfRecieved', value2: "", value3: "quantityOfError" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCenterHome;
