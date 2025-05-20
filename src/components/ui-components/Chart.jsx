import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import "../../styles/chart.css";
import rawData from "../../mockData/summary.json"

let data = rawData.summary.byCreatedDate

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const formattedData = data.map(item => {
  const monthIndex = parseInt(item.month.split('-')[1], 10) - 1;
  return {
    month: monthNames[monthIndex],
    count: item.count,
  };
});

const Chart = () => {
  return (
    <div className="chart-card">
      <span className="chart-title">Blogs by Created date</span>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={formattedData} margin={{ top: 30, right: 10, left: -35, bottom: 20 }}>
          <defs>
            <linearGradient id="colorBlogs" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" tick={{ fill: "#6B7280", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            domain={[10, 90]}
            ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90]}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            interval={0}
          />

          <Tooltip
            contentStyle={{ backgroundColor: "#fff", border: "1px solid #E5E7EB", borderRadius: 8 }}
            labelStyle={{ color: "#374151" }}
            itemStyle={{ color: "#4F46E5" }}
          />
          <Area
            type="monotone"
            dataKey="count"
            stroke="#4F46E5"
            strokeWidth={2}
            fill="url(#colorBlogs)"
            animationDuration={800}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
