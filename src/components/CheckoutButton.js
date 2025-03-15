import { useNavigate } from "react-router-dom";

export default function CheckoutButton() {
	const navigate = useNavigate();

	return (
		<button className="checkout-button"
		  onClick={() => navigate("/checkout-success")} 
		>Checkout button
		</button>
	  );
	}
	

