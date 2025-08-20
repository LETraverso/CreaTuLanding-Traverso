import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProducts } from "../data.js";
import ItemCard from "./ItemCard";
import "../css/ItemListContainer.css";

function ItemListContainer({ title, description }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts(categoryId)
      .then(setItems)
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div>
      <h1>
        {title} {categoryId ? `(${categoryId})` : ""}
      </h1>
      <p>{description}</p>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="card-grid">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
