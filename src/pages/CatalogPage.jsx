// src/pages/CatalogPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar";
import "../style/CatalogPage.css";
import "../style/CartModal.css";

// Продукты (пример)
const sampleProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 20000) + 500,
  image: "/images/product.png",
}));

function CatalogPage() {
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    color: [],
    size: [],
    material: [],
    priceRange: [0, 50000]
  });

  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartModal, setCartModal] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([...sampleProducts]);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    setFilteredProducts(
      sampleProducts.filter((product) => {
        if (filters.category.length > 0 && !filters.category.includes(product.category)) return false;
        if (filters.color.length > 0 && !filters.color.includes(product.color)) return false;
        if (filters.size.length > 0 && !filters.size.includes(product.size)) return false;
        if (filters.material.length > 0 && !filters.material.includes(product.material)) return false;
        if (filters.priceRange.length > 0 && (product.price < filters.priceRange[0] || product.price > filters.priceRange[1])) return false;
        return true;
      })
    );
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setCartModal(true);
  };

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((item) => item.id === product.id);
      if (isFavorite) {
        return prevFavorites.filter((item) => item.id !== product.id);
      }
      return [...prevFavorites, product];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="catalog-page">
      <FilterSidebar filters={filters} onChange={setFilters} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
            </Link>
            <h4>{product.name}</h4>
            <p>{product.price} €</p>
            <div className="product-actions">
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
              <div 
                className="favorite-icon" 
                onClick={() => toggleFavorite(product)}
                style={{ cursor: "pointer", fontSize: "18px" }}
              >
                {favorites.some((item) => item.id === product.id) ? "❤️" : "🤍"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Модальная корзина */}
      {cartModal && (
        <div className="cart-modal-overlay" onClick={(e) => e.target === e.currentTarget ? setCartModal(false) : null}>
          <div className="cart-modal-content">
            <h3>Your Cart</h3>
            <button className="close-btn" onClick={() => setCartModal(false)}>✖</button>
            {cart.length > 0 ? (
              <ul className="cart-items">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <span>{item.name} x {item.quantity}</span>
                    <span>{item.price * item.quantity} €</span>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✖</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty-cart">Your cart is empty</p>
            )}
            <div className="cart-total">
              <h4>Total: {cart.reduce((total, item) => total + item.price * item.quantity, 0)} €</h4>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CatalogPage;
