import "./factoryHome.css";
import React, { PureComponent, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ChartFactory from "./ChartFactory";
import Chart from "../../../components/chart/Chart";
import { useDispatch, useSelector } from "react-redux";
import { getProductLines } from "../../../api/productLineApi";
import { getProducts } from "../../../api/productsApi";
import { getFactory } from "../../../api/factoryApi";
import { getStore } from "../../../api/storesApi";
import { getDMY } from "../../../helper/getDMY";
import { products, yearlyData } from "../../../dummyData";
import Widget from "../../../components/widget/Widget"
import FeaturedInfoHome from "./FeaturedInfoFactory";


export default function Home() {
    const date = new Date();
    const today = { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() }
    // const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var monthsData = []
    for (let i = 0; i < 12; ++i) {
        monthsData.push({
            month: i + 1,
            quantityOfSold: 0,
            quantityOfManufacture: 0,
            quantityOfError: 0,
        });
    }
    // const quater = [1,3,4,5]
    var quatersData = []
    for (let i = 0; i < 4; ++i) {
        quatersData.push({
            quater: i + 1,
            quantityOfSold: 0,
            quantityOfManufacture: 0,
            quantityOfError: 0,
        });
    }

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     getProductLines(dispatch);
    //     getProducts(dispatch)
    //     getFactory(dispatch, '00', '000', '0000', '')
    //     //   getStore(dispatch, '00', '000', '0000', '')
    // }, [dispatch]);
    // const products = useSelector((state) => state.product.products);
    /**
       * thống kê theo tháng số sp sản xuất ra, bán ra, lỗi
       */

    for (let i = 0; i < products.length; ++i) {
        const sold = getDMY(products[i].soldDate).month
        const manufacture = getDMY(products[i].manufactureDate).month
        const error = getDMY(products[i].errorDate).month
        for (let i = 0; i < monthsData.length; ++i) {
            if (sold == monthsData[i].month) monthsData[i].quantityOfSold++
            if (manufacture == monthsData[i].month) monthsData[i].quantityOfManufacture++
            if (error == monthsData[i].month) monthsData[i].quantityOfError++
        }
    }
    var x = 0;
    for (let i = 0; i < quatersData.length; ++i) {
        quatersData[i].quantityOfSold = monthsData[x].quantityOfSold + monthsData[x + 1].quantityOfSold + monthsData[x + 2].quantityOfSold
        quatersData[i].quantityOfManufacture = monthsData[x].quantityOfManufacture + monthsData[x + 1].quantityOfManufacture + monthsData[x + 2].quantityOfManufacture
        quatersData[i].quantityOfError = monthsData[x].quantityOfError + monthsData[x + 1].quantityOfError + monthsData[x + 2].quantityOfError
        x = x + 3
    }
    console.log(quatersData);


    return (
        <div className="factory-home">
            <div className="charts_">
                <div className="homeWidgets_">
                    <FeaturedInfoHome/>
                </div>
                <div className="chart_">
                    <h3 className="title">Monthly Statistics</h3>
                    <ChartFactory data={monthsData} dataKey={{ name: "month", value1: 'quantityOfSold', value2: "quantityOfManufacture", value3: 'quantityOfError' }} />
                </div>
                <div className="chart_">
                    <h3 className="title">Quarterly Statistics</h3>
                    <ChartFactory data={quatersData} dataKey={{ name: "quater", value1: 'quantityOfSold', value2: "quantityOfManufacture", value3: 'quantityOfError' }} />
                </div>
                <div className="chart_">
                    <h3 className="title">Yearly Statistics</h3>
                    <ChartFactory data={yearlyData} dataKey={{ name: "year", value1: 'quantityOfSold', value2: "quantityOfManufacture", value3: 'quantityOfError' }} />
                </div>
            </div>
        </div>
    );
}
