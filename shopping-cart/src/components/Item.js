import '../styles/item.css';
import { useState } from 'react';

export default function Item(props) {
  const [qty, setQty] = useState(1);
  const [purchased, setPurchased] = useState(false);
  const path = props.artwork;

  const increment = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decrement = () => {
    if (qty >= 2) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  return (
    <div className="item-card">
      <img src={path} alt="record artwork"></img>
      <div className="card-bottom">
        <div>{props.album}</div>
        <div>{props.artist}</div>
        {qty > 1 ? (
          <div>
            £{props.price} each / £
            {Math.round((props.price * qty + Number.EPSILON) * 100) / 100} total
          </div>
        ) : (
          <div>£{props.price}</div>
        )}

        <div className="card-qty">
          <button onClick={decrement}>-</button>
          <div>{qty}</div>
          <button onClick={increment}>+</button>
        </div>
        <button
          onClick={() => {
            props.add(props.id, qty);
            setQty(1);
            setPurchased(true);
          }}
        >
          {purchased ? 'Added!' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
}
