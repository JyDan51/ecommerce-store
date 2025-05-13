// src/pages/FavoritesPage.jsx
import React from "react";
import "../style/FavoritesPage.css";
import { Link } from "react-router-dom";

function FavoritesPage({ favorites = [], toggleFavorite }) {
  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map((product) => (
            <div className="favorite-card" key={product.id}>
              <img src={product.image} alt={product.name} className="favorite-image" />
              <div className="favorite-details">
                <h4>{product.name}</h4>
                <p>{product.price} €</p>
                <button className="remove-btn" onClick={() => toggleFavorite(product)}>❌ Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-favorites">
          No favorites yet. <Link to="/catalog">Go to shopping</Link>
        </p>
      )}
    </div>
  );
}

export default FavoritesPage;
