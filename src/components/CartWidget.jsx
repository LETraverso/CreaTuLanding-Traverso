import { Link } from "react-router-dom";
import { useCart } from "./cart";
import "../css/CartWidget.css";

const CartWidget = () => {
  const { totalQuantity } = useCart();
  return (
    <Link to="/cart" className="cart-widget-button" aria-label="Carrito">
      🛒 <span className="cart-qty">{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
