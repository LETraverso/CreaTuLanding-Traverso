import { Link } from "react-router-dom";
import "../css/ItemCard.css";

function ItemCard({ item }) {
  return (
    <div className="card">
      <img src={item.img} alt={item.title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-price">${item.price}</p>
        <Link to={`/item/${item.id}`} className="btn">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default ItemCard;
