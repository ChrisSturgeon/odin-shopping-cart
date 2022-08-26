import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar(props) {
  const totalVal = Math.round((props.totalPrice + Number.EPSILON) * 100) / 100;

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
      <div className="summary">
        <div>{props.items} items in cart</div>
        {props.totalPrice > 0 ? (
          <div>£{totalVal} total</div>
        ) : (
          <div> &nbsp;</div>
        )}
        <button>View Cart</button>
      </div>
    </div>
  );
}
