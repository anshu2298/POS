const Table = require("../Models/TableModel.js");

const createTable = async (req, res) => {
  try {
    const { name, chairs } = req.body;

    if (!chairs) {
      return res
        .status(400)
        .json({ message: "Number of chairs is required" });
    }

    const newTable = new Table({
      name: name?.trim() || undefined,
      chairs: chairs.toString().padStart(2, "0"),
    });

    const savedTable = await newTable.save();
    res.status(201).json(savedTable);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

const getAllTables = async (req, res) => {
  try {
    const tables = await Table.find().sort({
      createdAt: 1,
    });
    res.status(200).json(tables);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

const updateTableReservedStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { reserved } = req.body;

    if (typeof reserved !== "boolean") {
      return res.status(400).json({
        message:
          "Invalid 'reserved' value. Must be true or false.",
      });
    }

    const updatedTable = await Table.findByIdAndUpdate(
      id,
      { reserved },
      { new: true }
    );

    if (!updatedTable) {
      return res
        .status(404)
        .json({ message: "Table not found" });
    }

    res.status(200).json(updatedTable);
  } catch (error) {
    res.status(500).json({
      message: "Error updating table",
      error: error.message,
    });
  }
};

const deleteTable = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Table.findByIdAndDelete(id);

    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Table not found" });
    }

    res
      .status(200)
      .json({ message: "Table deleted", id: deleted._id });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

module.exports = {
  createTable,
  getAllTables,
  deleteTable,
  updateTableReservedStatus,
};
