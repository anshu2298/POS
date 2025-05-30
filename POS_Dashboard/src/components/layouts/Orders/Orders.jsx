import OrderCard from "../../OrderCard/OrderCard";

import { useEffect, useState } from "react";
import "./Orders.css";
const Orders = () => {
  const [orders, setOrders] = useState([]);

  const [error, setError] = useState(null);
  const handleStatusChange = (orderId) => {
    console.log("Status changed", orderId);
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/order/get"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className='orders'>
      <h2>Order Line</h2>
      <div className='orders-card'>
        {orders.map((order, i) => (
          <OrderCard
            key={i}
            orderNumber={i + 1}
            id={order.id}
            tableNumber={order.tableNumber}
            time={order.time}
            items={order.items}
            status={order.status}
            serviceType={order.serviceType}
            duration={order.duration}
            onStatusChange={() =>
              handleStatusChange(order._id)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
