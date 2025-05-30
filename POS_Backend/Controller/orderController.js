const OrderModel = require("../Models/OrderModel");

const createOrder = async (req, res) => {
  try {
    const {
      orderNumber,
      tableNumber,
      time,
      price,
      status,
      serviceType,
      duration,
      items,
    } = req.body;

    if (
      !orderNumber ||
      !time ||
      !price ||
      !serviceType ||
      !duration ||
      !items?.length
    ) {
      return res.status(400).json({
        message: "Missing required order fields.",
      });
    }

    const newOrder = await OrderModel.create({
      orderNumber,
      tableNumber,
      time,
      price,
      status,
      serviceType,
      duration,
      items,
    });

    res.status(201).json({
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      message: "Server error while creating order.",
    });
  }
};

const getOrders = async (req, res) => {
  try {
    const { filter } = req.query;
    const now = new Date();
    let startDate;

    if (filter === "daily") {
      startDate = new Date(now.setHours(0, 0, 0, 0));
    } else if (filter === "weekly") {
      const day = now.getDay();
      startDate = new Date(now);
      startDate.setDate(now.getDate() - day);
      startDate.setHours(0, 0, 0, 0);
    } else if (filter === "monthly") {
      startDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        1
      );
    }

    const query = startDate
      ? { createdAt: { $gte: startDate } }
      : {};

    const orders = await OrderModel.find(query).sort({
      createdAt: -1,
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({
      message: "Server error while fetching orders.",
    });
  }
};

const getIncomingOrders = async (req, res) => {
  try {
    // Fetch only required fields: _id and prepTime
    const orders = await OrderModel.find(
      {},
      { _id: 1, duration: 1 }
    );

    // Format the response to match your expected structure
    const formattedOrders = orders.map((order) => ({
      id: order._id.toString(),
      duration: order.duration,
    }));

    res.status(200).json(formattedOrders);
  } catch (error) {
    console.error("Error fetching incoming orders:", error);
    res.status(500).json({
      message:
        "Server error while fetching incoming orders.",
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getIncomingOrders,
};
