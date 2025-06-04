import { useCart } from "./CartContext";

/**
 * CartProductCard component displays the list of products in the cart
 *
 * - Retrieves cart items from CartContext.
 * - Renders a message if the cart is empty.
 * - Otherwise, renders a list of products with their image, title, and price
 * @returns } The rendered list of cart items or empty message.
 */
export default function CartProductCard() {
  const { cart } = useCart();

  return (
    <>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-image-container">
                <img
                  src={item.image?.url}
                  alt={item.title}
                  className="cart-image"
                />
              </div>
              <div className="cart-info">
                <h2 className="cart-title">{item.title}</h2>
                <p className="cart-price">
                  Price: ${item.discountedPrice || item.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
