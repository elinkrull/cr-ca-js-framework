import { CheckCircle } from "lucide-react";
import ContinueShoppingButton from "../components/ContinueShoppingButton";
import Layout from "../components/Layout";

export default function CheckoutSuccess() {
  return (
    <Layout>
      <div className="checkoutsuccess">
        <h1>Thank You for Your Order! 🎉 </h1>
        <h2>Your order has been successfully placed.</h2>
        <CheckCircle color="green" size={48} className="success-icon" />
        <ContinueShoppingButton />
      </div>
    </Layout>
  );
}
