import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getAllMenuItems } from "../../data";

// Create context
const CartContext = createContext();

// Custom hook (optional but clean)
export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log("🧺 Cart items updated:", cartItems);
  }, [cartItems]);

  const addToCart = (id) => {
    setCartItems((prevItems) => {
      const isAlreadyInCart = prevItems.find(
        (item) => item.id === id
      );
      if (isAlreadyInCart) {
        return prevItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const itemToAdd = getAllMenuItems().find(
          (item) => item.id === id
        );
        return [
          ...prevItems,
          { ...itemToAdd, quantity: 1 },
        ];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
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
