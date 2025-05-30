const Customer = require("../Models/CustomerModel");

const addCustomer = async (req, res) => {
  const { name, phoneNumber, address, tableNumber } =
    req.body;

  if (!name || !phoneNumber) {
    return res.status(400).json({
      message: "Name and phone number are required",
    });
  }

  try {
    const newCustomer = await Customer.create({
      name,
      phoneNumber,
      address,
      tableNumber,
    });

    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({
      message: "Error adding customer",
      error: error.message,
    });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching customers",
      error: error.message,
    });
  }
};

module.exports = {
  addCustomer,
  getCustomers,
};
