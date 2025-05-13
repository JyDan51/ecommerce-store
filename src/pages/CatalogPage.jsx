// CatalogPage.jsx - Каталог товаров с фильтрацией и сортировкой
import React, { useState, useEffect } from 'react';
import '../style/CatalogPage.css';

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', brand: '', priceRange: [0, 1000] });
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    let filtered = products;

    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    if (filters.brand) {
      filtered = filtered.filter(product => product.brand === filters.brand);
    }

    if (sortOrder === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [filters, sortOrder, products]);

  return (
    <div className='catalog-page'>
      <h2>Catalog</h2>
      <div className='filters'>
        <select onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
          <option value=''>All Categories</option>
          <option value='Clothing'>Clothing</option>
          <option value='Shoes'>Shoes</option>
        </select>
        <select onChange={(e) => setFilters({ ...filters, brand: e.target.value })}>
          <option value=''>All Brands</option>
          <option value='Nike'>Nike</option>
          <option value='Adidas'>Adidas</option>
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value='default'>Sort By</option>
          <option value='price-asc'>Price: Low to High</option>
          <option value='price-desc'>Price: High to Low</option>
        </select>
      </div>

      <div className='product-list'>
        {filteredProducts.map(product => (
          <div className='product-card' key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price} €</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
