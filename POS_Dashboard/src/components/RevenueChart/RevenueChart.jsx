import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";
import "./RevenueChart.css";

const weekdays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

const RevenueChart = ({ orders }) => {
  const [revenueData, setRevenueData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let timeoutId;
    const fetchRevenue = async (orders) => {
      const revenueMap = {
        Sun: 0,
        Mon: 0,
        Tue: 0,
        Wed: 0,
        Thu: 0,
        Fri: 0,
        Sat: 0,
      };

      // Get current date
      const now = new Date();

      // Get last Sunday (start of the week)
      const dayOfWeek = now.getDay(); // 0 (Sun) - 6 (Sat)
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - dayOfWeek);
      startOfWeek.setHours(0, 0, 0, 0); // clear time

      // Filter orders created in the current week
      const weeklyOrders = orders.filter((order) => {
        const createdAt = new Date(order.createdAt);
        return createdAt >= startOfWeek;
      });

      weeklyOrders.forEach((order) => {
        const day = new Date(order.createdAt).getDay(); // 0-6
        const weekday = weekdays[day];
        revenueMap[weekday] += Number(order.price);
      });

      const chartData = weekdays.map((day) => ({
        name: day,
        revenue: revenueMap[day],
      }));

      setRevenueData(chartData);
      setLoading(false);
    };
    setLoading(true);
    timeoutId = setTimeout(() => {
      fetchRevenue(orders);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [orders]);

  return (
    <section className='revenue-card'>
      <div className='card-header'>
        <h2 className='card-title'>Revenue</h2>
      </div>

      <div className='graph-container'>
        {loading ? (
          <div className='loader-container'>
            <BounceLoader size={150} />
          </div>
        ) : (
          <ResponsiveContainer
            width='100%'
            height={300}
          >
            <LineChart
              data={revenueData}
              margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid stroke='none' />
              <XAxis
                dataKey='name'
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#64748B" }}
              />
              <YAxis hide />
              <ReferenceArea
                x1='Sat'
                x2='Sat'
                strokeOpacity={0}
                fill='#E5E7EB'
                fillOpacity={0.5}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                formatter={(value) => [
                  `₹${value}`,
                  "Revenue",
                ]}
              />
              <Line
                type='monotone'
                dataKey='revenue'
                stroke='#000'
                strokeWidth={2.5}
                dot={false}
                activeDot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  );
};

export default RevenueChart;
