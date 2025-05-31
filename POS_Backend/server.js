require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors");
const port = process.env.PORT;
const url = process.env.DB_URI;
const customerRoutes = require("./Routes/customerRoutes.js");
const OrderRoutes = require("./Routes/orderRoutes.js");
const TableRoutes = require("./Routes/tableRoutes.js");
const app = express();

app.use(
  cors({
    // origin: [process.env.CLIENT_URL, process.env.ADMIN_URL],
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.use("/api/customer", customerRoutes);

app.use("/api/order", OrderRoutes);

app.use("/api/table", TableRoutes);

const start = async () => {
  try {
    connectDB(url).then(() => {
      console.log("Connected to DB....");
    });
    app.listen(
      port,
      console.log(
        `Server is running on port: http://localhost:${port}`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

start();
