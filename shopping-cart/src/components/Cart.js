import CartItem from './CartItem';

export default function Cart(props) {
  return (
    <div>
      {props.cart.map((item) => {
        return <CartItem key={item.sku} />;
      })}
    </div>
  );
}
