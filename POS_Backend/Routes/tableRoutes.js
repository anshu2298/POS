const express = require("express");
const router = express.Router();
const {
  createTable,
  getAllTables,
  deleteTable,
  updateTableReservedStatus,
} = require("../Controller/tableController");

router.post("/add", createTable);
router.get("/", getAllTables);
router.delete("/:id", deleteTable);
router.patch("/:id/reserved", updateTableReservedStatus);

module.exports = router;
