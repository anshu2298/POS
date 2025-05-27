import { useState } from "react";
import AnalyticsSection from "../../Analytics/AnalyticsSection";
import OrderSummary from "../../OrderSummary/OrderSummary";
import RevenueChart from "../../RevenueChart/RevenueChart";
import TableReservation from "../../TableReservation/TableReservation";
import ChefOrdersTable from "../../ChefOrders/ChefOrdersTable";
import "./Dashboard.css";

import { CiCircleChevDown } from "react-icons/ci";
const Dashboard = () => {
  const [timeFilter, setTimeFilter] = useState("daily");

  return (
    <>
      <div className='card filter-box'>
        <p className='filter-input'>Filter...</p>
        <CiCircleChevDown
          size={50}
          className='filter-icon'
        />
      </div>
      <div className=' dashboard'>
        <AnalyticsSection />

        <div className='dashboard-grid'>
          <OrderSummary
            timeFilter={timeFilter}
            onFilterChange={setTimeFilter}
          />

          <RevenueChart
            timeFilter={timeFilter}
            onFilterChange={setTimeFilter}
          />

          <TableReservation />
        </div>

        <ChefOrdersTable />
      </div>
    </>
  );
};

export default Dashboard;
