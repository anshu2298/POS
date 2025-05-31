import "./Analytics.css";
import AnalyticsCard from "./AnalyticsCard";
import { PiBowlFoodThin } from "react-icons/pi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LuContactRound } from "react-icons/lu";
import { IoMdContacts } from "react-icons/io";
import { useEffect, useState } from "react";
import { API_PATHS } from "../../utils/apiPaths";

const AnalyticsSection = ({ orders, clients }) => {
  const [totalClients, setTotalClients] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  // ✅ Update clients and orders count when props change
  useEffect(() => {
    setTotalClients(clients.length);
    setTotalOrders(orders.length);
  }, [clients, orders]);

  // ✅ Calculate total revenue
  const fetchAndCalculateRevenue = async (
    url,
    setRevenueFn
  ) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        const totalRevenue = data.reduce(
          (acc, order) => acc + (Number(order.price) || 0),
          0
        );
        setRevenueFn(totalRevenue);
      } else {
        console.error(
          "Failed to fetch revenue:",
          data.message
        );
      }
    } catch (error) {
      console.error("Error fetching revenue:", error);
    }
  };

  useEffect(() => {
    fetchAndCalculateRevenue(
      API_PATHS.ORDERS.GET,
      setTotalRevenue
    );
  }, []);

  const analytics = [
    {
      id: "chefs",
      title: "Total Chefs",
      value: "04",
      icon: <PiBowlFoodThin />,
    },
    {
      id: "revenue",
      title: "Total Revenue",
      value: `₹${totalRevenue.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
      icon: <FaIndianRupeeSign />,
    },
    {
      id: "orders",
      title: "Total Orders",
      value: totalOrders.toString(),
      icon: <LuContactRound />,
    },
    {
      id: "clients",
      title: "Total Clients",
      value: totalClients.toString(),
      icon: <IoMdContacts />,
    },
  ];

  return (
    <section className='analytics-section animate-slide-up'>
      <h2 className='section-title'>Analytics</h2>
      <div className='analytics-grid'>
        {analytics.map((item) => (
          <AnalyticsCard
            key={item.id}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default AnalyticsSection;
