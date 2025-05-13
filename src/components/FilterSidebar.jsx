// src/components/FilterSidebar.jsx
import React from 'react';
import "../style/FilterSidebar.css";

export default function FilterSidebar({ filters, onChange }) {
  const handleCheckboxChange = (category, value) => {
    onChange((prevFilters) => {
      const values = prevFilters[category] || [];
      if (values.includes(value)) {
        return { ...prevFilters, [category]: values.filter((v) => v !== value) };
      } else {
        return { ...prevFilters, [category]: [...values, value] };
      }
    });
  };

  const handleRadioChange = (category, value) => {
    onChange((prevFilters) => ({ ...prevFilters, [category]: value }));
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    onChange((prevFilters) => ({
      ...prevFilters,
      priceRange: [0, value]
    }));
  };

  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>

      <h4>Category</h4>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('category', 'Clothing')} /> Clothing</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('category', 'Accessories')} /> Accessories</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('category', 'Shoes')} /> Shoes</label>

      <h4>Brand</h4>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('brand', 'Nike')} /> Nike</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('brand', 'Adidas')} /> Adidas</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('brand', 'Puma')} /> Puma</label>

      <h4>Color</h4>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('color', 'Black')} /> Black</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('color', 'White')} /> White</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('color', 'Red')} /> Red</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('color', 'Blue')} /> Blue</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('color', 'Green')} /> Green</label>

      <h4>Size</h4>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('size', 'S')} /> S</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('size', 'M')} /> M</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('size', 'L')} /> L</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('size', 'XL')} /> XL</label>

      <h4>Material</h4>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('material', 'Cotton')} /> Cotton</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('material', 'Leather')} /> Leather</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('material', 'Wool')} /> Wool</label>

      <h4>Price</h4>
      <input type="range" min="0" max="50000" step="500" 
        value={filters.priceRange ? filters.priceRange[1] : 50000} 
        onChange={handlePriceChange} 
      />
      <div>0€ - {filters.priceRange ? filters.priceRange[1] : 50000}€</div>
    </div>
  );
}
