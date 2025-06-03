import { createContext, useContext, useState } from "react";

const CartContext = createContext();

/**
 * Provides cart state and functions to children components.
 */
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  /**
   * Adds a product to the cart
   */
  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  /**
   * Clears all items from the cart.
   */
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

/**
 * Custom hook to access the cart context.
 */
export function useCart() {
  return useContext(CartContext);
}
