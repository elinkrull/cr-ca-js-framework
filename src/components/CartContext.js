import { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Provider Component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // Stores the cart items

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




// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function useCart() {
//   return useContext(CartContext);
// }

// // Cart provider to wrap the app
// export function CartProvider({ children }) {
//   const [cartCount, setCartCount] = useState(0);

//   function addToCart() {
//     setCartCount((prevCount) => prevCount + 1);
//   }

//   return (
//     <CartContext.Provider value={{ cartCount, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }