import { useState } from "react";

export default function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial);
  const dec = () => setQty(qty > 1 ? qty - 1 : 1);
  const inc = () => setQty(qty < stock ? qty + 1 : stock);

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button onClick={dec}>-</button>
      <span>{qty}</span>
      <button onClick={inc}>+</button>
      <button onClick={() => onAdd(qty)} disabled={stock <= 0}>
        Agregar
      </button>
    </div>
  );
}
