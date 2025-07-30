import CartWidget from './CartWidget';
import '../css/NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <h2 className="logo">NALA</h2>
    <ul className="nav-list">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Productos</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
    <CartWidget />
  </nav>
);

export default NavBar;