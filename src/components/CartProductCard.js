import { useCart } from "../components/CartContext";

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
              <img
                src={item.image?.url}
                alt={item.title}
                className="cart-image"
              />
              <div>
                <h2>{item.title}</h2>
                <p>Price: ${item.discountedPrice || item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
