import { useCart } from "../components/CartContext";

export default function CartTotal() {
  // Get cart items from context
  const { cart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + (item.discountedPrice || item.price),
    0
  );

  return <h2 className="cart-total">Total Price: ${totalPrice.toFixed(2)}</h2>;
}
