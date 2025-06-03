import { CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContinueShoppingButton from "../components/ContinueShoppingButton";

export default function CheckoutSuccess() {
  return (
    <main>
      <Header />
      <div className="checkoutsuccess">
        <h1>Thank You for Your Order! 🎉 </h1>
        <h2>Your order has been successfully placed.</h2>
        <CheckCircle color="green" size={48} className="success-icon" />
        <ContinueShoppingButton />
      </div>
      <Footer />
    </main>
  );
}
