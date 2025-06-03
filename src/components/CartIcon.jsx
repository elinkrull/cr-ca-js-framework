import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";

/**
 * CartIcon component displays a shopping cart button.
 * - Shows current number of items in cart.
 * - Navigates to "/cart" page when clicked.
 * - Uses CartContext to get cart data.
 * - Uses react-router-dom for navigation.
 */
export default function CartIcon() {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <button onClick={() => navigate("/cart")} className="shopping-cart-button">
      <ShoppingCart className="shopping-cart" />
      {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
    </button>
  );
}
