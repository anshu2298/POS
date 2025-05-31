import "./CardHeader.css";
import { PiForkKnifeFill } from "react-icons/pi";
const CardHeader = ({
  orderNumber,
  tableNumber,
  time,
  serviceType,
  statusLabel,
  statusType,
  count,
  remainingTime,
}) => {
  return (
    <div className='order-card-header'>
      <div className='order-info'>
        <div className='icon-number'>
          <PiForkKnifeFill
            size={23}
            color='#007AFF'
          />
          <h3 className='order-number'>#{orderNumber}</h3>
        </div>
        <div className='table-time'>
          <p className='table-number'>
            Table-{tableNumber}
          </p>
          <p className='order-time'>{time}</p>
        </div>
        <p className='item-count'>{`${count} Items`}</p>
      </div>

      <div className={`service-badge ${statusType}`}>
        <p className='service-type'>{serviceType}</p>
        <p className='status-label'>{remainingTime}</p>
      </div>
    </div>
  );
};

export default CardHeader;
