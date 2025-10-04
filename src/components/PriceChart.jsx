import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function PriceChart({ data }) {
  const chartData = data.map((item) => ({
    product: item.product,
    Today: item.today_max,
    Week: item.lastweek_max,
    Month: item.lastmonth_max,
    Year: item.year_max,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="product" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Today" stroke="#2563eb" />
        <Line type="monotone" dataKey="Week" stroke="#16a34a" />
        <Line type="monotone" dataKey="Month" stroke="#f59e0b" />
        <Line type="monotone" dataKey="Year" stroke="#dc2626" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default PriceChart;
