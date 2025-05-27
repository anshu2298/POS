import OrderCard from "../../OrderCard/OrderCard";
import formattedOrders from "../../../../orders";
import "./Orders.css";
const Orders = () => {
  const handleStatusChange = () => {};

  return (
    <div className='orders'>
      <h2>Order Line</h2>
      <div className='orders-card'>
        {formattedOrders.map((order, i) => (
          <OrderCard
            key={i}
            orderNumber={order.orderNumber}
            tableNumber={order.tableNumber}
            time={order.time}
            items={order.items}
            status={order.status}
            serviceType={order.serviceType}
            duration={order.duration}
            onStatusChange={() =>
              handleStatusChange(order.id)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
