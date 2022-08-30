import '../styles/cartItem.css';

export default function CartItem(props) {
  const path = props.artwork;
  const totalPrice =
    Math.round((props.price * props.quantity + Number.EPSILON) * 100) / 100;

  return (
    <div className="cart-item">
      <img src={path} alt="record artwork"></img>
      <div className="item-details">
        <div>{props.album}</div>
        <div>{props.artist}</div>
        <div>Quantity: {props.quantity}</div>
        <div>
          £{props.price} each / £{totalPrice} total
        </div>
      </div>

      <button
        onClick={() => {
          console.log(props.sku);
          props.remove(props.sku);
        }}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}
