import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";

export default function CartIcon() {
	const navigate = useNavigate();
	const { cartCount } = useCart();

	return (
		<button 
		  onClick={() => navigate("/cart")} 
		  className="shopping-cart-button"
		>
		    <ShoppingCart className="shopping-cart" />
      {cartCount > 0 && (
        <span className="cart-count">{cartCount}</span> 
      )}
    </button>
	  );
	}
	


  

