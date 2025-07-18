const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  tableNumber: {
    type: Number,
  },
});
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
