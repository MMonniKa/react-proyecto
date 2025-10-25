import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
  const {getTotalItems} = useCartContext();
  
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">TIENDA TORTAS</h2>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category/con-frutas">Con frutas</Link>
        </li>
        <li>
          <Link to="/category/sin-frutas">Sin frutas</Link>
        </li>
        <li className="cart-link">
          <Link to="/carrito">Carrito</Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};


