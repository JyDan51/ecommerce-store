import React, { useState } from "react";
import { placeOrder } from "../api/orders";
import "../style/CheckoutPage.css";

function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    postalCode: "",
    paymentMethod: "card",
  });

  const [errors, setErrors] = useState({});
  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Enter your full name.";
    if (!/^[\\d+\\-\\s()]{7,15}$/.test(formData.phone)) newErrors.phone = "Enter a valid phone number.";
    if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(formData.email)) newErrors.email = "Enter a valid email.";
    if (!formData.city.trim()) newErrors.city = "Enter your city.";
    if (!formData.address.trim()) newErrors.address = "Enter your address.";
    if (!/^[0-9]{5,6}$/.test(formData.postalCode)) newErrors.postalCode = "Enter a valid postal code.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const shippingInfo = { ...formData };
    delete shippingInfo.paymentMethod;

    try {
      const orderData = {
        items: [], // you’d normally pull this from cart context or backend
        shippingInfo,
        paymentMethod: formData.paymentMethod,
      };
      const response = await placeOrder(orderData, token);
      if (response._id) {
        alert("Order placed! Thank you for your purchase.");
      }
    } catch (err) {
      alert("Failed to place order.");
      console.error(err);
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </label>

        <label>Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>

        <label>Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          {errors.city && <span className="error">{errors.city}</span>}
        </label>

        <label>Shipping Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          {errors.address && <span className="error">{errors.address}</span>}
        </label>

        <label>Postal Code:
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
          {errors.postalCode && <span className="error">{errors.postalCode}</span>}
        </label>

        <label>Payment Method:
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>

        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
