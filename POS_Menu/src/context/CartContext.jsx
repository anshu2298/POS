import { createContext, useContext, useState } from "react";
import { getAllMenuItems } from "../../data";
import toast from "react-hot-toast";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    setCartItems((prevItems) => {
      const isAlreadyInCart = prevItems.find(
        (item) => item.id === id
      );
      if (isAlreadyInCart) {
        toast.success("Increased quantity");
        return prevItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const itemToAdd = getAllMenuItems().find(
          (item) => item.id === id
        );
        toast.success("Item added to cart");
        return [
          ...prevItems,
          { ...itemToAdd, quantity: 1 },
        ];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const item = prevItems.find((item) => item.id === id);
      if (item) toast.error("Item removed from cart");
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
