import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="nav-link">
        <h1>HAPPYSHOP</h1>
      </Link>
      <nav className="navbar">
        <Link to="/" className="nav-link">
          PRODUCTS
        </Link>
        <Link to="/contact" className="nav-link">
          CONTACT
        </Link>
      </nav>
      <CartIcon />
    </div>
  );
}
