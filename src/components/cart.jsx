import React, { createContext, useContext, useMemo, useState } from "react";

const Ctx = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (item, quantity = 1) => {
    setItems((prev) => {
      const i = prev.findIndex((x) => x.id === item.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], quantity: copy[i].quantity + quantity };
        return copy;
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const setQuantity = (id, quantity) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((x) => x.id !== id)
        : prev.map((x) => (x.id === id ? { ...x, quantity } : x))
    );
  };

  const removeItem = (id) =>
    setItems((prev) => prev.filter((x) => x.id !== id));
  const clearCart = () => setItems([]);

  const totalQuantity = useMemo(
    () => items.reduce((a, x) => a + x.quantity, 0),
    [items]
  );
  const totalPrice = useMemo(
    () => items.reduce((a, x) => a + x.price * x.quantity, 0),
    [items]
  );

  const value = {
    items,
    addItem,
    setQuantity,
    removeItem,
    clearCart,
    totalQuantity,
    totalPrice,
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
};

export function Cart() {
  const {
    items,
    totalQuantity,
    totalPrice,
    setQuantity,
    removeItem,
    clearCart,
  } = useCart();
  if (items.length === 0) return <p>Tu carrito está vacío.</p>;

  return (
    <div style={{ maxWidth: 720, margin: "20px auto" }}>
      <h2>Carrito</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cant.</th>
            <th>Subtot.</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <tr key={it.id} style={{ borderTop: "1px solid #eee" }}>
              <td>{it.title}</td>
              <td>${it.price}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={it.quantity}
                  onChange={(e) => setQuantity(it.id, Number(e.target.value))}
                  style={{ width: 60 }}
                />
              </td>
              <td>${(it.price * it.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeItem(it.id)}>Quitar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <p>
        Total unidades: <strong>{totalQuantity}</strong>
      </p>
      <p>
        Total a pagar: <strong>${totalPrice.toFixed(2)}</strong>
      </p>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
}
