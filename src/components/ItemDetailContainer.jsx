import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useCart } from "./cart";
import ItemCount from "./ItemCount";
import "../css/ItemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDoc(doc(db, "posts", id)).then((snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setItem({
          id: snap.id,
          title: data.title ?? "Sin título",
          price: Number(data.price ?? 0),
          description: data.description ?? "",
          stock: Number(data.stock ?? 10),
        });
      } else {
        setItem(null);
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p className="loading">Cargando...</p>;
  if (!item) return <p className="not-found">Producto no encontrado</p>;

  const handleAdd = (qty) => {
    addItem({ id: item.id, title: item.title, price: item.price }, qty);
    setAdded(true);
  };

  return (
    <div className="detail-container">
      <div className="detail-card">
        <h2 className="detail-title">{item.title}</h2>
        <p className="detail-description">{item.description}</p>
        <p className="detail-price">Precio: ${item.price}</p>

        {!added ? (
          item.stock > 0 ? (
            <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
          ) : (
            <p>Producto sin stock</p>
          )
        ) : (
          <div style={{ display: "flex", gap: 12 }}>
            <Link to="/cart" className="btn">
              Ir al carrito
            </Link>
            <Link to="/" className="btn">
              Seguir comprando
            </Link>
          </div>
        )}

        <Link to="/" className="back-link">
          ← Volver al catálogo
        </Link>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
