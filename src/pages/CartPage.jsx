import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutButton from "../components/CheckoutButton";
import CartProductCard from "../components/CartProductCard";
import CartTotal from "../components/CartTotal";

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="cart-page">
        <h2>Your Cart</h2>
        <CartProductCard />
        <CartTotal />
        <CheckoutButton />
      </main>
      <Footer />
    </>
  );
}
