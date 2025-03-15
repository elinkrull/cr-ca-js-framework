import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function CartIcon() {
	const navigate = useNavigate();

	return (
		<button 
		  onClick={() => navigate("/cart")} 
		  className="shopping-cart-button"
		>
		  <ShoppingCart className="shopping-cart" />
		</button>
	  );
	}
	


  

