import { useState } from "react";
import { useCart } from "../context/CartContext";
import Header from "../components/Header/Header";
import CartItem from "../components/CartItems/CartItem";
import OrderOptions from "../components/OrderOptions/OrderOptions";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import UserDetails from "../components/UserDetails/UserDetails";
import DeliveryDetails from "../components/DeliveryDetails/DeliveryDetails";
import MealPrepTime from "../components/MealPrepTime/MealPrepTime";
import SwipeButton from "../components/SwipeButton/SwipeButton";
import DeliveryInstructions from "../components/DeliveryInstructions/DeliveryInstructions";
import toast from "react-hot-toast";
import { API_PATHS } from "../utils/apiPaths";
const Checkout = () => {
  const { cartItems, removeFromCart, setCartItems } =
    useCart();
  const [orderOption, setOrderOption] = useState("dine-in");
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const getTotalPrepTime = () => {
    if (cartItems.length === 0) return 0;
    return Math.max(
      ...cartItems.map((item) => item.duration || 0)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  );
  const deliveryCharge =
    orderOption === "take-away" ? 50 : 0;
  const taxes = 5;

  const handleOrderOptionChange = (option) => {
    setOrderOption(option);
  };

  const handleQuantityChange = (itemId, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
    toast.success("cart updated");
  };

  const handleOrderComplete = async () => {
    if (!userDetails.name || !userDetails.phoneNumber) {
      toast.error("Enter Customer Details");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    setLoading(true);

    try {
      let assignedTable = null;
      let assignedTableId = null;

      if (
        orderOption === "dine-in" &&
        userDetails.occupancy
      ) {
        // 1. Fetch available tables
        const tableRes = await fetch(API_PATHS.TABLES.GET);
        const tableData = await tableRes.json();

        // 2. Find a suitable unreserved table for required occupancy
        const suitableTable = tableData.find(
          (table) =>
            !table.reserved &&
            Number(table.chairs) >=
              Number(userDetails.occupancy)
        );

        if (!suitableTable) {
          alert(
            "No available table found for the specified occupancy."
          );
          return;
        }

        // 3. Reserve that table
        const reserveRes = await fetch(
          API_PATHS.TABLES.UPDATE(suitableTable._id),
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ reserved: true }),
          }
        );

        if (!reserveRes.ok) {
          throw new Error("Failed to reserve table");
        }

        assignedTable = suitableTable.name;
        assignedTableId = suitableTable._id;
      }

      // 4. Create customer if not exists
      const customersRes = await fetch(
        API_PATHS.CUSTOMERS.GET
      );
      const customersData = await customersRes.json();

      const existingCustomer = customersData.find(
        (cust) =>
          cust.phoneNumber === userDetails.phoneNumber
      );

      if (!existingCustomer) {
        const customerCreateRes = await fetch(
          API_PATHS.CUSTOMERS.ADD,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: userDetails.name,
              phoneNumber: userDetails.phoneNumber,
              address:
                orderOption === "take-away"
                  ? userDetails.address
                  : "",
              tableNumber: assignedTable,
            }),
          }
        );

        if (!customerCreateRes.ok) {
          toast.error("Customer already exists");
          throw new Error("Failed to create customer");
        }
      }

      // 5. Create Order
      const formattedOrder = {
        orderNumber: Math.floor(
          1000 + Math.random() * 9000
        ).toString(),
        tableNumber:
          orderOption === "dine-in"
            ? assignedTable || "N/A"
            : "N/A",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        duration: getTotalPrepTime(),
        price: (subtotal + deliveryCharge + taxes).toFixed(
          2
        ),
        tableId: assignedTableId,

        status: "Processing",
        serviceType:
          orderOption === "dine-in"
            ? "Dine In"
            : "Take Away",
        items: cartItems.map((item) => ({
          category: item.category,
          name: item.name,
          quantity: item.quantity || 1,
        })),
      };

      const orderRes = await fetch(API_PATHS.ORDERS.ADD, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedOrder),
      });

      if (!orderRes.ok) {
        throw new Error("Failed to create order");
      }

      const createdOrder = await orderRes.json();

      console.log("Order created:", createdOrder);
      setCartItems([]);

      toast.success("Order placed successfully!");
      toast.success("Assigned Table: " + assignedTable);
    } catch (error) {
      console.error("Error completing order:", error);
      toast.error(
        "Failed to complete order. Please try again."
      );
    } finally {
      setLoading(false);
      setUserDetails({});
    }
  };

  return (
    <div className='container'>
      <div className='main-content'>
        <Header />
        <div className='cart-items'>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemove={removeFromCart}
            />
          ))}
        </div>

        <DeliveryInstructions />

        <OrderOptions
          onOptionChange={handleOrderOptionChange}
        />
        <OrderSummary
          subtotal={subtotal}
          deliveryCharge={deliveryCharge}
          taxes={taxes}
          orderOption={orderOption}
        />
        <UserDetails
          orderOption={orderOption}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />

        {orderOption === "dine-in" ? (
          <MealPrepTime
            estimatedTime={getTotalPrepTime().toString()}
          />
        ) : (
          <DeliveryDetails
            address={userDetails.address}
            estimatedTime={getTotalPrepTime().toString()}
          />
        )}
        {loading ? (
          <div className='loading-overlay'>
            <div className='spinner' />
            <p>Placing your order...</p>
          </div>
        ) : (
          <SwipeButton
            onComplete={handleOrderComplete}
            disabled={cartItems.length === 0}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;
