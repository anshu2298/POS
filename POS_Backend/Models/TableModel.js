const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    chairs: {
      type: String,
      enum: ["02", "04", "06"],
      required: true,
    },
    reserved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Table", tableSchema);
