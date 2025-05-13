// CheckoutPage.jsx - Оформление заказа с валидацией
import React, { useState } from 'react';
import '../style/CheckoutPage.css';

function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!/^[\d+\-()\s]{7,15}$/.test(formData.phone)) newErrors.phone = 'Enter a valid phone number.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address.';
    if (!formData.address.trim()) newErrors.address = 'Address is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Order placed! Thank you.');
    }
  };

  return (
    <div className='checkout-page'>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className='checkout-form'>
        <input type='text' name='fullName' placeholder='Full Name' onChange={handleChange} />
        {errors.fullName && <p className='error-message'>{errors.fullName}</p>}

        <input type='text' name='phone' placeholder='Phone' onChange={handleChange} />
        {errors.phone && <p className='error-message'>{errors.phone}</p>}

        <input type='email' name='email' placeholder='Email' onChange={handleChange} />
        {errors.email && <p className='error-message'>{errors.email}</p>}

        <input type='text' name='address' placeholder='Shipping Address' onChange={handleChange} />
        {errors.address && <p className='error-message'>{errors.address}</p>}

        <button type='submit'>Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
