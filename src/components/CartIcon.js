import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";

export default function CartIcon() {
	const navigate = useNavigate();
	const { cart } = useCart(); // Get cart items from context

	return (
	  <button onClick={() => navigate("/cart")} className="shopping-cart-button">
		<ShoppingCart className="shopping-cart" />
		{cart.length > 0 && <span className="cart-count">{cart.length}</span>}
	  </button>
	);
  }
	


  

