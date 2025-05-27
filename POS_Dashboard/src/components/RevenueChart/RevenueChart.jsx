import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
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

const RevenueChart = ({ timeFilter, onFilterChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false);

  // Mock data - in a real app, this would be fetched based on the timeFilter
  const revenueData = [
    { name: "Mon", revenue: 1200 },
    { name: "Tue", revenue: 1900 },
    { name: "Wed", revenue: 1500 },
    { name: "Thu", revenue: 5400 },
    { name: "Fri", revenue: 3200 },
    { name: "Sat", revenue: 2800 },
    { name: "Sun", revenue: 2100 },
  ];

  const toggleDropdown = () =>
    setIsDropdownOpen(!isDropdownOpen);

  const selectFilter = (filter) => {
    onFilterChange(filter);
    setIsDropdownOpen(false);
  };

  return (
    <section className='revenue-card '>
      <div className='card-header'>
        <h2 className='card-title'>Revenue</h2>

        <div className='filter-dropdown'>
          <button
            className='filter-button'
            onClick={toggleDropdown}
            aria-haspopup='true'
            aria-expanded={isDropdownOpen}
          >
            {timeFilter === "daily"
              ? "Daily"
              : timeFilter === "weekly"
              ? "Weekly"
              : timeFilter === "monthly"
              ? "Monthly"
              : "Daily"}
            <RiArrowDownSLine />
          </button>

          {isDropdownOpen && (
            <div className='dropdown-menu'>
              <button onClick={() => selectFilter("daily")}>
                Daily
              </button>
              <button
                onClick={() => selectFilter("weekly")}
              >
                Weekly
              </button>
              <button
                onClick={() => selectFilter("monthly")}
              >
                Monthly
              </button>
            </div>
          )}
        </div>
      </div>

      <div className='graph-container'>
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
      </div>
    </section>
  );
};

export default RevenueChart;
