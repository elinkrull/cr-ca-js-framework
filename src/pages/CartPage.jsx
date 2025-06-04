import CheckoutButton from "../components/CheckoutButton";
import CartProductCard from "../components/CartProductCard";
import CartTotal from "../components/CartTotal";
import Layout from "../components/Layout";

export default function CartPage() {
  return (
    <Layout>
      <div className="cart-page">
        <h2>Your Cart</h2>
        <CartProductCard />
        <CartTotal />
        <CheckoutButton />
      </div>
    </Layout>
  );
}
