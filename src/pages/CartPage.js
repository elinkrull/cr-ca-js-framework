import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutButton from "../components/CheckoutButton";
import CartProductCard from "../components/CartProductCard";

export default function CartPage() {
	
  return (
    <>
	  <Header />
	  <main className="cart-page">
	  <h1>Your Cart</h1>
	  <CartProductCard />
	  <CheckoutButton />
      </main>
      <Footer />
    </>
  );
}
     