import { useNavigate } from "react-router-dom";

export default function ContinueShoppingButton() {
  const navigate = useNavigate();

  return (
    <button className="continue-shopping-button" onClick={() => navigate("/")}>
      Continue Shopping
    </button>
  );
}
