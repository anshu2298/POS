import "./Analytics.css";

const AnalyticsCard = ({ title, value, icon, color }) => {
  const colorClass = `analytics-card-${color || "black"}`;

  return (
    <div className={`analytics-card ${colorClass}`}>
      <div className='analytics-card-icon'>{icon}</div>
      <div className='analytics-card-content'>
        <h3 className='analytics-card-value'>{value}</h3>
        <p className='analytics-card-title'>{title}</p>
      </div>
    </div>
  );
};

export default AnalyticsCard;
