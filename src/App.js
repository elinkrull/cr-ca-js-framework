import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Homepage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import IndividualProductPage from "./pages/IndividualProductPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router className="app-container">
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/cart" element={<CartPage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          	<Route path="/product/:id" element={<IndividualProductPage />} />
		</Routes>
    </Router>
  )
}