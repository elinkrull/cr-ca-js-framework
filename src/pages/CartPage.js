import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutButton from "../components/CheckoutButton";

export default function CartPage() {

  return (
    <div className="cart-page">
	  <Header />
      <h1>Shopping cart</h1>
	  <CheckoutButton/>
	  <Footer />
    </div>
  );
}