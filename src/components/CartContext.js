import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

// Cart provider to wrap the app
export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount((prevCount) => prevCount + 1);
  }

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
