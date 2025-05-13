// src/components/FilterSidebar.jsx
import React from 'react';
import "../style/FilterSidebar.css";

export default function FilterSidebar({ filters, onChange }) {
  const handleCheckboxChange = (category, value) => {
    onChange((prevFilters) => {
      const values = prevFilters[category];
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

      <h4>Gender</h4>
      <label><input type="radio" name="gender" onChange={() => handleRadioChange('gender', 'Male')} /> Male</label>
      <label><input type="radio" name="gender" onChange={() => handleRadioChange('gender', 'Female')} /> Female</label>
      <label><input type="radio" name="gender" onChange={() => handleRadioChange('gender', 'Unisex')} /> Unisex</label>
      <label><input type="radio" name="gender" onChange={() => handleRadioChange('gender', '')} /> Any</label>

      <h4>Size</h4>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('size', 'S')} /> S</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('size', 'M')} /> M</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('size', 'L')} /> L</label>
      <label><input type="checkbox" onChange={() => handleCheckboxChange('size', 'XL')} /> XL</label>

      <h4>Price</h4>
      <input
        type="range"
        min="0"
        max="20000"
        step="100"
        value={filters.priceRange[1]}
        onChange={handlePriceChange}
      />
      <div>0₽ - {filters.priceRange[1]}₽</div>
    </div>
  );
}
