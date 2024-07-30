import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const item = {
    1: { title: 'Pizza Margarita', description: 'Tomato, mozzarella, and basil', img: 'https://via.placeholder.com/150' },
    2: { title: 'Pepperoni Pizza', description: 'Pepperoni, mozzarella, and tomato sauce', img: 'https://via.placeholder.com/150' },
    3: { title: 'Vegetarian Pizza', description: 'Bell peppers, olives, and onions', img: 'https://via.placeholder.com/150' }
  }[id];

  if (!item) return <div>Item not found</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{item.title}</h1>
      <img src={item.img} alt={item.title} style={{ width: '300px', height: '300px', borderRadius: '8px' }} />
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetailContainer;
