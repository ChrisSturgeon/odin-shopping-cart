export default function CartItem(props) {
  return (
    <div>
      <div>Img here</div>
      <div>{props.album}</div>
      <div>{props.artist}</div>
      <div>{props.artist}</div>
      <div>{props.quantity}</div>
    </div>
  );
}
