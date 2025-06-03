import { createContext, useContext, useState } from "react";

/**
 * @typedef {Object} CartContextType
 * @property {Array} cart - The current list of products in the cart.
 * @property {function} addToCart - Function to add a product to the cart.
 * @property {function} clearCart - Function to clear the cart.
 */

/** @type {React.Context<CartContextType>} */
const CartContext = createContext();

/**
 * CartProvider component that wraps children with CartContext.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The child components that need access to the cart context.
 * @returns {JSX.Element}
 */
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  /**
   * Add a product to the cart.
   *
   * @param {Object} product - The product to add to the cart.
   */
  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  /**
   * Clear all products from the cart.
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
 *
 * @returns {CartContextType}
 */
export function useCart() {
  return useContext(CartContext);
}
