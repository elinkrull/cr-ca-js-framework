import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="header">
		<h1>SHOP</h1>
		<nav className="navbar">
			<Link className="nav-link" to="/">HOME</Link>
     		<Link to="/" className="nav-link">PRODUCTS</Link>
    		<Link to="./pages/ContactPage" className="nav-link">CONTACT</Link>
    	</nav>
		<ShoppingCart className="shopping-cart" />
		</div>
	)
};