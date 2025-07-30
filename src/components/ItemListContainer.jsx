import '../css/ItemListContainer.css';

const ItemListContainer = ({ title, description }) => (
  <section className="item-list-container">
    <h3 className="item-list-title">{title}</h3>
    <p className="item-list-description">{description}</p>
    <button
      className="item-list-button"
      onClick={() => alert(`Más sobre ${title}`)}
    >
      Ver más
    </button>
  </section>
);

export default ItemListContainer;