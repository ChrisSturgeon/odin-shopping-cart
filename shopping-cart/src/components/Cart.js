import CartItem from './CartItem';
import '../styles/cart.css';

export default function Cart(props) {
  return (
    <div className="cart-body">
      <h1 className="cart-title">Your cart</h1>
      {props.cart.map((item) => {
        return (
          <CartItem
            key={item.sku}
            sku={item.sku}
            artwork={item.artwork}
            album={item.album}
            artist={item.artist}
            quantity={item.quantity}
            price={item.price}
            remove={props.remove}
          />
        );
      })}

      <div>Checkout</div>
    </div>
  );
}
