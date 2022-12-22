import "./factoryHome.scss";
import Widget from "../../../components/widget/Widget";
import Table from "../../../components/table/Table";
import Featured from "../../../components/featured/Featured";
import Chart from "../../../components/chart/Chart";
import { userData } from "../../../dummyData";

const FactoryHome = () => {
    return (
        <div className="home">
            <div className="homeContainer">
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default FactoryHome;
