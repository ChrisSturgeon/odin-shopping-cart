import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="cart">Cart</Link>
      <Link to="about">About</Link>
    </div>
  );
}
