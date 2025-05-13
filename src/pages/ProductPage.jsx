// src/pages/ProductPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../style/ProductPage.css";

// Продукты (пример)
const sampleProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 20000) + 500,
  image: "/images/product.png",
  description: "High-quality product made with premium materials.",
}));

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [favorites, setFavorites] = useState([]);
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  const toggleFavorite = () => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((item) => item.id === product.id);
      return isFavorite
        ? prevFavorites.filter((item) => item.id !== product.id)
        : [...prevFavorites, product];
    });
  };

  if (!product) {
    return <p className="not-found">Product not found.</p>;
  }

  return (
    <div className="product-page">
      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-image-large" />
        
        {/* Кнопка избранного под фото */}
        <div className="favorite-icon" onClick={toggleFavorite}>
          {favorites.some((item) => item.id === product.id) ? "❤️" : "🤍"}
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price} €</p>

          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
