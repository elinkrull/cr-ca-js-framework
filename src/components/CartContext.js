import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); 

  // Function to add items to the cart
  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]); // Adds product to cart array
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook to use the cart context
export function useCart() {
  return useContext(CartContext);
}