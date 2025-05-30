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

const Checkout = () => {
  const { cartItems, removeFromCart, setCartItems } =
    useCart();
  const [orderOption, setOrderOption] = useState("dine-in");
  const [userDetails, setUserDetails] = useState({});
  const handleUserDetailsSubmit = (Details) => {
    console.log("Received from UserDetails:", Details);
    setUserDetails(Details);
  };

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
  const deliveryCharge = 50;
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
  };

  const handleOrderComplete = async () => {
    if (!userDetails.name || !userDetails.phoneNumber) {
      alert(
        "Please fill out all user details before completing the order."
      );
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      // Step 1: Check if customer already exists
      const customersRes = await fetch(
        "http://localhost:3000/api/customer/get"
      );
      const customersData = await customersRes.json();

      const existingCustomer = customersData.find(
        (cust) =>
          cust.phoneNumber === userDetails.phoneNumber
      );

      if (!existingCustomer) {
        const customerCreateRes = await fetch(
          "http://localhost:3000/api/customer/add",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: userDetails.name,
              phoneNumber: userDetails.phoneNumber,
              address: userDetails.address,
              tableNumber:
                orderOption === "dine-in"
                  ? userDetails.tableNumber
                  : null,
            }),
          }
        );

        if (!customerCreateRes.ok) {
          throw new Error("Failed to create customer");
        }

        console.log("New customer created");
      } else {
        console.log(
          "Customer already exists. Proceeding to create order..."
        );
      }

      // Step 3: Create order
      const formattedOrder = {
        orderNumber: Math.floor(
          1000 + Math.random() * 9000
        ).toString(),
        tableNumber:
          orderOption === "dine-in"
            ? userDetails.tableNumber || "N/A"
            : "N/A",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        duration: getTotalPrepTime(),
        price: (subtotal + deliveryCharge + taxes).toFixed(
          2
        ),
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

      const orderRes = await fetch(
        "http://localhost:3000/api/order/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formattedOrder),
        }
      );

      if (!orderRes.ok) {
        throw new Error("Failed to create order");
      }

      const createdOrder = await orderRes.json();

      console.log("Order created:", createdOrder);
      setCartItems([]);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error completing order:", error);
      alert("There was a problem placing your order.");
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
        />
        <UserDetails
          orderOption={orderOption}
          onFormSubmit={handleUserDetailsSubmit}
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

        <SwipeButton onComplete={handleOrderComplete} />
      </div>
    </div>
  );
};

export default Checkout;
