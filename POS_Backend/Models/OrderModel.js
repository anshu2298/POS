const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, default: 1 },
});

const orderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      required: true,
    },
    tableNumber: {
      type: Number,
      default: null,
    },
    time: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Processing", "Done"],
      default: "Processing",
    },
    serviceType: {
      type: String,
      enum: ["Dine In", "Take Away"],
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    items: [itemSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
