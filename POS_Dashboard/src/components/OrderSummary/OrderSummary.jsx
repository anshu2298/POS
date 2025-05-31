import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "./OrderSummary.css";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const OrderSummary = ({
  orderStats,
  setTimeFilter,
  timeFilter,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false);

  const toggleDropdown = () =>
    setIsDropdownOpen(!isDropdownOpen);

  const selectFilter = (filter) => {
    setTimeFilter(filter);
    setIsDropdownOpen(false);
  };

  const pieData = {
    labels: orderStats.map((stat) => stat.type),
    datasets: [
      {
        data: orderStats.map((stat) => stat.count),
        backgroundColor: ["#828282", "#2c2c2c", "#5b5b5b"],
        borderWidth: 0,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "50%",
  };

  return (
    <section className='summary-card'>
      <div className='card-header'>
        <h2 className='card-title'>Order Summary</h2>

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

      <div className='order-stats'>
        {orderStats.map((stat) => (
          <div
            key={stat.type}
            className='stat-box'
          >
            <div className='stat-value'>
              {stat.count.toString().padStart(2, "0")}
            </div>
            <div className='stat-label'>{stat.type}</div>
          </div>
        ))}
      </div>
      <div className='stats-container'>
        <div className='chart-container'>
          <Pie
            data={pieData}
            options={pieOptions}
          />
        </div>

        <div className='progress-section'>
          {orderStats.map((stat) => (
            <div
              key={stat.type}
              className='progress-item'
            >
              <div className='progress-label'>
                <span>{stat.type}</span>
                <span className='progress-percentage'>
                  {stat.percentage}%
                </span>
              </div>
              <div className='progress-bar'>
                <div
                  className={`progress-fill progress-${stat.type
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  style={{ width: `${stat.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
