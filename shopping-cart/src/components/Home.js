import { ReactComponent as MySVG } from '../imgs/record.svg';
import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="home-main">
      <div className="home-left">
        <h1>Only the finest beats.</h1>
        <Link className="link-btn" to="shop">
          <button>Shop now</button>
        </Link>
      </div>
      <MySVG className="record" />
    </div>
  );
}
