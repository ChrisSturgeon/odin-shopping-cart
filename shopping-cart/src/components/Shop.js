import '../styles/shop.css';

import Item from './Item';
import data from '../stock';

export default function Shop(props) {
  const catalogue = data;
  return (
    <div>
      <h1>Shop</h1>
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
