import '../styles/shop.css';
import { Link } from 'react-router-dom';
import Item from './Item';
import data from '../stock';

export default function Shop(props) {
  const totalVal = Math.round((props.totalPrice + Number.EPSILON) * 100) / 100;
  const catalogue = data;
  return (
    <div>
      <div>
        {props.totalPrice > 0 ? (
          <div className="summary">
            <div data-testid="totalItems">{props.items} items in cart</div>
            <div data-testid="totalValue">£{totalVal} total</div>
            <Link to="cart">
              <button>View Cart</button>
            </Link>
          </div>
        ) : (
          <div className="summary empty">
            <Link to="cart">
              <button>View Cart</button>
            </Link>
          </div>
        )}
      </div>
      <div className="cards">
        {catalogue.map((record) => {
          return (
            <Item
              key={record.sku}
              artwork={record.artwork}
              album={record.album}
              artist={record.artist}
              price={record.price}
              add={props.add}
              id={record.sku}
            />
          );
        })}
      </div>
    </div>
  );
}
