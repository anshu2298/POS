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

  const handleOrderComplete = () => {
    if (
      !userDetails.name ||
      !userDetails.phoneNumber ||
      !userDetails.address
    ) {
      alert(
        "Please fill out all user details before completing the order."
      );
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const userOrder = {
      orderType: orderOption,
      name: userDetails.name,
      phoneNumber: userDetails.phoneNumber,
      address: userDetails.address,
      order: cartItems,
      price: subtotal + deliveryCharge + taxes,
    };

    console.log("Order Complete:", userOrder);

    setCartItems([]);
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
          <MealPrepTime estimatedTime='20' />
        ) : (
          <DeliveryDetails
            address={userDetails.address}
            estimatedTime='42'
          />
        )}

        <SwipeButton onComplete={handleOrderComplete} />
      </div>
    </div>
  );
};

export default Checkout;
