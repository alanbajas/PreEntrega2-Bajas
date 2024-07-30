import React from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const items = [
    { id: 1, title: 'Pizza Margarita', description: 'Tomato, mozzarella, and basil', img: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Pepperoni Pizza', description: 'Pepperoni, mozzarella, and tomato sauce', img: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Vegetarian Pizza', description: 'Bell peppers, olives, and onions', img: 'https://via.placeholder.com/150' }
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{greeting}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items.map((item) => (
          <div key={item.id} style={{ display: 'flex', backgroundColor: 'white', color: 'black', padding: '1rem', borderRadius: '8px' }}>
            <img src={item.img} alt={item.title} style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
            <div style={{ marginLeft: '1rem' }}>
              <h2>
                <Link to={`/item/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                  {item.title}
                </Link>
              </h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
