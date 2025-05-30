import CardHeader from "./CardHeader";
import OrderItems from "./OrderItems";
import StatusButton from "./StatusButton";
import "./OrderCard.css";

const OrderCard = ({
  orderNumber,
  tableNumber,
  time,
  items,
  status,
  serviceType,
  onStatusChange,
  duration,
}) => {
  const getCardClass = () => {
    if (serviceType === "Take Away") {
      return "order-card take-away";
    }

    switch (status) {
      case "Processing":
        return "order-card processing";
      case "Done":
        return "order-card done";
      default:
        return "order-card";
    }
  };

  const getStatusInfo = () => {
    if (serviceType === "Take Away") {
      return {
        label: "Not Picked up",
        type: "take-away",
      };
    }

    if (status === "Processing") {
      return {
        label: `Ongoing: ${duration || "0"} Min`,
        type: "ongoing",
      };
    }

    return {
      label: "Served",
      type: "served",
    };
  };

  const statusInfo = getStatusInfo();

  return (
    <div className={getCardClass()}>
      <CardHeader
        orderNumber={orderNumber}
        tableNumber={tableNumber}
        time={time}
        serviceType={serviceType}
        statusLabel={statusInfo.label}
        statusType={statusInfo.type}
        count={items.length}
      />

      <OrderItems items={items} />
      <div className='status'>
        <StatusButton
          status={status}
          serviceType={serviceType}
          onClick={onStatusChange}
        />
      </div>
    </div>
  );
};

export default OrderCard;
