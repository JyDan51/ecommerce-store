// src/pages/ProductPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../style/ProductPage.css";

// Пример данных (замени на свои)
const sampleProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: "A high-quality product for your style.",
  price: Math.floor(Math.random() * 20000) + 500,
  image: "/images/product.png",
  brand: ["Nike", "Adidas", "Puma"][Math.floor(Math.random() * 3)],
  color: ["Black", "White", "Red", "Blue", "Green"][Math.floor(Math.random() * 5)],
  size: ["S", "M", "L", "XL", "XXL"][Math.floor(Math.random() * 5)],
  material: ["Cotton", "Leather", "Wool"][Math.floor(Math.random() * 3)],
}));

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-page">
      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-image-large" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p><strong>Price:</strong> {product.price} €</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Color:</strong> {product.color}</p>
          <p><strong>Size:</strong> {product.size}</p>
          <p><strong>Material:</strong> {product.material}</p>
          <button onClick={() => navigate("/cart")} className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;