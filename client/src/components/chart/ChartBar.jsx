import "./chartBar.css";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

export default function ChartBar({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer  width="100%" aspect={4 / 1} className="chartContentProduct">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          <Bar dataKey={dataKey} barSize={30} fill="#5550bd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
