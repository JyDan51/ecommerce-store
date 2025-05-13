// src/pages/CatalogPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar";
import "../style/CatalogPage.css";
import { useCart } from "../context/CartContext";

// Продукты (пример)
const sampleProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 20000) + 500,
  image: "/images/product.png",
}));

function CatalogPage() {
  const { addToCart } = useCart();
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((item) => item.id === product.id);
      return isFavorite
        ? prevFavorites.filter((item) => item.id !== product.id)
        : [...prevFavorites, product];
    });
  };

  return (
    <div className="catalog-page">
      <FilterSidebar />
      <div className="product-list">
        {sampleProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
            </Link>

            {/* Кнопка избранного под фото */}
            <div className="favorite-icon" onClick={() => toggleFavorite(product)}>
              {favorites.some((item) => item.id === product.id) ? "❤️" : "🤍"}
            </div>

            <h4>{product.name}</h4>
            <p>{product.price} €</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
