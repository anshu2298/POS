const express = require("express");

const {
  createOrder,
  getOrders,
  getIncomingOrders,
  updateOrderStatus,
} = require("../Controller/orderController");

const router = express.Router();

router.post("/create", createOrder);
router.get("/get", getOrders);
router.get("/getPrepTime", getIncomingOrders);
router.patch("/:id/updateStatus", updateOrderStatus);
module.exports = router;
