import { Link } from "react-router-dom";
import "../css/ItemCard.css";
import { useCart } from "./cart";

function ItemCard({ item }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    const price = Number(item.price) || 0;
    addItem({ id: item.id, title: item.title, price }, 1);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-price">${Number(item.price)}</p>
        <button onClick={handleAdd} className="btn">
          Agregar al carrito
        </button>
        <Link to={`/item/${item.id}`} className="btn">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default ItemCard;
