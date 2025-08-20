import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../css/NavBar.css";

const NavBar = () => (
  <nav className="navbar">
    <h2 className="logo">
      <Link to="/">NALA</Link>
    </h2>
    <ul className="nav-list">
      <li>
        <NavLink to="/" end>
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink to="/category/abstracto">Abstracto</NavLink>
      </li>
      <li>
        <NavLink to="/category/botanico">Botánico</NavLink>
      </li>
      <li>
        <NavLink to="/category/urbano">Urbano</NavLink>
      </li>
    </ul>
    <CartWidget />
  </nav>
);

export default NavBar;
