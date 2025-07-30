import React, { useState } from 'react';
import '../css/CartWidget.css';

const CartWidget = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => setCount(count + 1);

  return (
    <button className="cart-widget-button" onClick={handleAdd}>
      🛒 {count}
    </button>
  );
};

export default CartWidget;
