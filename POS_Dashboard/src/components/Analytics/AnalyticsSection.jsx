import "./Analytics.css";
import AnalyticsCard from "./AnalyticsCard";
import { PiBowlFoodThin } from "react-icons/pi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LuContactRound } from "react-icons/lu";
import { IoMdContacts } from "react-icons/io";
const AnalyticsSection = () => {
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
      value: "12K",
      icon: <FaIndianRupeeSign />,
    },
    {
      id: "orders",
      title: "Total Orders",
      value: "20",
      icon: <LuContactRound />,
    },
    {
      id: "clients",
      title: "Total Clients",
      value: "65",
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
