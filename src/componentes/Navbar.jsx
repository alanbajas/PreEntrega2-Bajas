import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">Tuper's Pizzas</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/pizzas">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/nuestra-cocina">Nuestra cocina</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/promociones">Promociones</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
