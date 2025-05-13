// src/components/ProductCard.jsx
import React from 'react';
import '../style/ProductCard.css';

function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{price} €</p>
      <button>Buy</button>
    </div>
  );
}

export default ProductCard;
