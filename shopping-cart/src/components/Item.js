import '../styles/item.css';
import { useState } from 'react';

export default function Item(props) {
  const [qty, setQty] = useState(1);

  const increment = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decrement = () => {
    if (qty >= 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  return (
    <div className="item-card">
      <div>{props.album}</div>
      <div>{props.artist}</div>
      <div>£{props.price}</div>

      <div className="card-qty">
        <button onClick={decrement}>-</button>
        <div>{qty}</div>
        <button onClick={increment}>+</button>
      </div>
      {qty > 1 ? <div>£{props.price * qty} total </div> : null}
      <button
        onClick={() => {
          props.add(props.id, qty);
          setQty(1);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
