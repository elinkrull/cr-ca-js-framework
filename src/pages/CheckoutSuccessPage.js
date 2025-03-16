import { CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CheckoutSuccess() {
  return (
    <main>
      <Header />
      <div className="checkoutsuccess">
        <h1>Congratulations, </h1>
        <h1>the payment was successful</h1>
        <CheckCircle color="green" size={48} className="success-icon" />
      </div>
      <Footer />
    </main>
  );
}
