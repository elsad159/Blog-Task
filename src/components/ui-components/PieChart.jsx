import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '../../styles/rainbow.css';
import summary from "../../mockData/summary.json";

const chartData = summary.summary.byCategory;

const COLORS = ['#A259FF', '#F89E52', '#5CD97C', '#FFD25F', '#7C5CFC', '#F76DA0'];

const PieChart = () => {
    const totalCount = chartData.reduce((sum, item) => sum + item.count, 0);

    return (
        <div className="card">
            <span className="card-title">Blogs by Category</span>

            <div className="chart-container">
                <ResponsiveContainer width="100%" height={160}>
                    <PieChart>
                        <Pie
                            data={chartData}
                            dataKey="count"
                            startAngle={180}
                            endAngle={0}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={3}
                            stroke="none"
                            cornerRadius={6}
                        >
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="chart-total">
                    <span>{totalCount}</span>
                    <span className='totalWord'>Total</span>
                </div>
            </div>

            <div className="categories">
                <ul className="left-column">
                    {chartData.slice(0, 3).map((item, index) => (
                        <li className="category-item" key={item.category}>
                            <div className="dot" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                            <span className="word">{item.category}</span>
                            <span className="count">{item.count}</span>
                        </li>
                    ))}
                </ul>

                <ul className="right-column">
                    {chartData.slice(3).map((item, index) => (
                        <li className="category-item right" key={item.category}>
                            <div className="dot" style={{ backgroundColor: COLORS[(index + 3) % COLORS.length] }}></div>
                            <span className="word">{item.category}</span>
                            <span className="count">{item.count}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PieChart;
