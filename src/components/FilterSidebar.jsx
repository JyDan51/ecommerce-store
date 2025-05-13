// src/components/FilterSidebar.jsx
import React from "react";
import "../style/FilterSidebar.css";

export default function FilterSidebar({ filters = {}, onChange }) {
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
      <label><input type="checkbox" onChange={() => handleCheckboxChange('category', 'Shoes')} /> Shoes</label>

      <h4>Price</h4>
      <input
        type="range"
        min="0"
        max="50000"
        step="500"
        value={filters.priceRange ? filters.priceRange[1] : 50000}
        onChange={handlePriceChange}
      />
      <div>0€ - {filters.priceRange ? filters.priceRange[1] : 50000}€</div>
    </div>
  );
}
