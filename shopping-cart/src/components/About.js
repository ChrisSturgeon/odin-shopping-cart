import crates from '../imgs/shop.jpeg';
import '../styles/about.css';

export default function About() {
  return (
    <div className="about-main">
      <div className="about-left">
        <h1>About Us</h1>
        <div className="about-text">
          <p>We are an independent record shop in London specialising in:</p>
          <ul>
            <li>Function Funk</li>
            <li>Alternative Async</li>
            <li>Debugging Dubstep</li>
            <li>Boolean Bluegrass</li>
            <li>Event Electro</li>
            <li>Looping Latin</li>
            <li>String Ska</li>
            <li>Ambient Arrays</li>
          </ul>
        </div>
      </div>
      <img src={crates} alt="record crates"></img>
    </div>
  );
}
