import AnalyticsSection from "../../Analytics/AnalyticsSection";
import OrderSummary from "../../OrderSummary/OrderSummary";
import RevenueChart from "../../RevenueChart/RevenueChart";
import TableReservation from "../../TableReservation/TableReservation";
import ChefOrdersTable from "../../ChefOrders/ChefOrdersTable";
import "./Dashboard.css";
import { CiCircleChevDown } from "react-icons/ci";
import { useDashboardData } from "../../../context/DashboardDataContex";
const Dashboard = () => {
  const {
    orders,
    clients,
    chefOrders,
    orderStats,
    setTimeFilter,
    timeFilter,
  } = useDashboardData();

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
        <AnalyticsSection
          orders={orders}
          clients={clients}
        />

        <div className='dashboard-grid'>
          <OrderSummary
            orderStats={orderStats}
            setTimeFilter={setTimeFilter}
            timeFilter={timeFilter}
          />

          <RevenueChart orders={orders} />

          <TableReservation />
        </div>

        <ChefOrdersTable chefOrders={chefOrders} />
      </div>
    </>
  );
};

export default Dashboard;
