import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar(props) {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        React Records
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
        <Link to="about">About</Link>
      </div>
      <div>{props.cart.length} items in cart</div>
    </div>
  );
}
