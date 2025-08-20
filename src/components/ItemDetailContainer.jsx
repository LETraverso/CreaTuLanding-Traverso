import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../data";
import "../css/ItemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductById(id)
      .then(setItem)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="loading">Cargando...</p>;
  if (!item) return <p className="not-found">Producto no encontrado</p>;

  return (
    <div className="detail-container">
      <div className="detail-card">
        <h2 className="detail-title">{item.title}</h2>
        <p className="detail-description">{item.description}</p>
        <p className="detail-price">Precio: ${item.price}</p>
        <Link to="/" className="back-link">
          ⬅ Volver al catálogo
        </Link>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
