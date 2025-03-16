import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

export default function CheckoutButton() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  return (
    <button
      className="checkout-button"
      onClick={() => {
        clearCart();
        navigate("/checkout-success");
      }}>
      Confirm order
    </button>
  );
}
