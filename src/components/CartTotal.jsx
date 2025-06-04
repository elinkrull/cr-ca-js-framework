import { useCart } from "./CartContext";

/**
 * CartTotal component calculates and displays the total price of all products in the cart
 * @returns {string} This is the displayed message to the user on the CartPage, diplaying the calculated total price of the items that has been added to the cart.
 */

export default function CartTotal() {
  /**
   * Retrieves cart items from CartContext.
   */
  const { cart } = useCart();

  /**
   * Calculates the total price using discountedPrice if available, otherwise price.
   */
  const totalPrice = cart.reduce(
    (total, item) => total + (item.discountedPrice || item.price),
    0
  );

  return <h2 className="cart-total">Total Price: ${totalPrice.toFixed(2)}</h2>;
}
