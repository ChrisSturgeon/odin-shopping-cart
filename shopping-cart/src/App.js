import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import About from './components/About';
import Home from './components/Home';

const App = function () {
  const [cart, setCart] = useState([]);

  return (
    <div className="wrapper">
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default App;
