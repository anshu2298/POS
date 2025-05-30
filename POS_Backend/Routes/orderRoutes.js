const express = require("express");

const {
  createOrder,
  getOrders,
  getIncomingOrders,
} = require("../Controller/orderController");

const router = express.Router();

router.post("/create", createOrder);
router.get("/get", getOrders);
router.get("/getPrepTime", getIncomingOrders);
module.exports = router;
