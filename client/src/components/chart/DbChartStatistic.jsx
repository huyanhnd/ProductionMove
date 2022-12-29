
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function DbChartStatistic({data, dataKey}) {
  
  return (
    <ResponsiveContainer width="100%" height="95%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.7} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorQv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#d16060" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#d16060" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKey.name} stroke="#00008B"/>
        <YAxis stroke="#00008B"/>
        <Tooltip />
        <Legend/>
        <Area type="monotone" dataKey={dataKey.value1} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        <Area type="monotone" dataKey={dataKey.value2} stroke="#d16060" fillOpacity={1} fill="url(#colorQv)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
