const express = require("express");
const {
  addCustomer,
  getCustomers,
} = require("../Controller/customerController");

const router = express.Router();

router.post("/add", addCustomer);
router.get("/get", getCustomers);

module.exports = router;
