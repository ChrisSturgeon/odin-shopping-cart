import { ReactComponent as MySVG } from '../imgs/record.svg';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="home-main">
      <div className="home-left">
        <h1>Home page content</h1>
      </div>
      <MySVG className="record" />
    </div>
  );
}
