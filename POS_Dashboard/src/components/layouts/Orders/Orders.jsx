import OrderCard from "../../OrderCard/OrderCard";
import { useEffect, useState, useRef } from "react";
import "./Orders.css";
import { API_PATHS } from "../../../utils/apiPaths";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const intervalRef = useRef(null);
  const updatedOrderIdsRef = useRef(new Set());

  const fetchOrders = async () => {
    try {
      const response = await fetch(API_PATHS.ORDERS.GET);
      if (!response.ok)
        throw new Error("Failed to fetch orders");
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  const updateOrderStatusToDone = async (orderId) => {
    try {
      await fetch(API_PATHS.ORDERS.UPDATE_STATUS(orderId), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Done" }),
      });
    } catch (err) {
      console.error("Error updating order status:", err);
    }
  };

  const unreserveTable = async (tableId) => {
    try {
      await fetch(API_PATHS.TABLES.UPDATE(tableId), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reserved: false }),
      });
    } catch (err) {
      console.error("Error unreserving table:", err);
    }
  };

  useEffect(() => {
    fetchOrders();

    intervalRef.current = setInterval(() => {
      setOrders((prevOrders) => {
        const now = new Date();
        const updatedOrders = prevOrders.map((order) => {
          if (order.status === "Done") return order;

          const placedAt = new Date(order.createdAt);
          const minutesPassed = Math.floor(
            (now - placedAt) / 60000
          );

          if (
            minutesPassed >= order.duration &&
            !updatedOrderIdsRef.current.has(order._id)
          ) {
            updateOrderStatusToDone(order._id);
            updatedOrderIdsRef.current.add(order._id);

            if (
              order.serviceType === "Dine In" &&
              order.tableId
            ) {
              unreserveTable(order.tableId);
            }

            return { ...order, status: "Done" };
          }

          return order;
        });

        return updatedOrders;
      });
    }, 60000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className='orders'>
      <h2>Order Line</h2>
      <div className='orders-card'>
        {orders.map((order, i) => {
          const placedAt = new Date(order.createdAt);
          const now = new Date();
          const timeSpent = Math.floor(
            (now - placedAt) / 60000
          );
          const remainingTime = Math.max(
            order.duration - timeSpent,
            0
          );

          return (
            <OrderCard
              key={order._id || i}
              orderNumber={i + 1}
              id={order.id}
              tableNumber={order.tableNumber}
              time={order.time}
              items={order.items}
              status={order.status}
              serviceType={order.serviceType}
              duration={order.duration}
              remainingTime={remainingTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
