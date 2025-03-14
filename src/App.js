import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";
import IndividualProductPage from "./pages/IndividualProductPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";

export default function App() {
  return (
    <Router className="app-container">
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/Contact" element={<ContactPage />} />
			<Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/product/:id" element={<IndividualProductPage />} />
		</Routes>
    </Router>
  )
}