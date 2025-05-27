const formattedOrders = [
  {
    id: 1,
    orderNumber: "1001",
    tableNumber: "N/A",
    time: "9:00 AM",
    status: "Processing",
    serviceType: "Take Away",
    duration: 5,
    items: [
      { category: "pizza", name: "Capricciosa" },
      { category: "pizza", name: "Sicilian" },
      { category: "pizza", name: "Marinara" },
    ],
  },
  {
    id: 2,
    orderNumber: "1002",
    tableNumber: "N/A",
    time: "9:10 AM",
    status: "Processing",
    serviceType: "Delivery",
    duration: 6,
    items: [
      {
        category: "burger",
        name: "Classic Chicken Burger",
      },
      { category: "sides", name: "Cheesy Fries" },
      { category: "beverage", name: "Coca-Cola" },
    ],
  },
  {
    id: 3,
    orderNumber: "1003",
    tableNumber: "6",
    time: "9:20 AM",
    status: "Processing",
    serviceType: "Dine In",
    duration: 4,
    items: [
      { category: "pasta", name: "Creamy Alfredo Pasta" },
      { category: "beverage", name: "Lemon Ice Tea" },
    ],
  },
  {
    id: 4,
    orderNumber: "1004",
    tableNumber: "N/A",
    time: "9:30 AM",
    status: "Done",
    serviceType: "Delivery",
    duration: 7,
    items: [
      { category: "pizza", name: "Farmhouse Pizza" },
      { category: "dessert", name: "Chocolate Lava Cake" },
    ],
  },
  {
    id: 5,
    orderNumber: "1005",
    tableNumber: "N/A",
    time: "9:40 AM",
    status: "Processing",
    serviceType: "Take Away",
    duration: 5,
    items: [
      {
        category: "snack",
        name: "Paneer Grilled Sandwich",
      },
      {
        category: "beverage",
        name: "Strawberry Milkshake",
      },
    ],
  },
  {
    id: 6,
    orderNumber: "1006",
    tableNumber: "12",
    time: "9:50 AM",
    status: "Done",
    serviceType: "Dine In",
    duration: 4,
    items: [
      { category: "meal", name: "Deluxe Veg Thali" },
      { category: "beverage", name: "Buttermilk" },
    ],
  },
];

export default formattedOrders;
