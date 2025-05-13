// src/pages/CatalogPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar";
import "../style/CatalogPage.css";

// Продукты (пример)
const sampleProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 20000) + 500,
  color: ["Black", "White", "Red", "Blue", "Green"][Math.floor(Math.random() * 5)],
  brand: ["Nike", "Adidas", "Puma"][Math.floor(Math.random() * 3)],
  size: ["S", "M", "L", "XL", "XXL"][Math.floor(Math.random() * 5)],
  material: ["Cotton", "Leather", "Wool"][Math.floor(Math.random() * 3)],
  image: "/images/product.png"
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

  const [filteredProducts, setFilteredProducts] = useState([...sampleProducts]);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    setFilteredProducts(
      sampleProducts.filter((product) => {
        if (filters.category.length > 0 && !filters.category.includes(product.category)) return false;
        if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) return false;
        if (filters.color.length > 0 && !filters.color.includes(product.color)) return false;
        if (filters.size.length > 0 && !filters.size.includes(product.size)) return false;
        if (filters.material.length > 0 && !filters.material.includes(product.material)) return false;
        if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
        return true;
      })
    );
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
