import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Logo from './assets/logo/logo_tuper_s.png';

function App() {
  return (
    <div style={{ backgroundColor: 'brown', color: 'white' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        <img style={{ width: '100px' }} src={Logo} alt="logo_tuper_s" />
      </div>
      <footer style={{ backgroundColor: 'darkred', padding: '1rem', textAlign: 'center', color: 'white' }}>
        &copy; 2024 Tuper's Pizzas. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
