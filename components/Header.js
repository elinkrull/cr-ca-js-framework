import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="header">
		<Link className="nav-link" to="/">HOME</Link>
		<nav className="navbar">
     		<Link to="/" className="nav-link">PRODUCTS</Link>
    		<Link to="/contact" className="nav-link">CONTACT</Link>
    	</nav>
		<img src="#" className="cart-icon" alt="Cart Icon" />
		</header>
	)
}