// src/pages/CartPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../style/CartPage.css";

function CartPage() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>{item.price} € x {item.quantity}</p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty</p>
      )}

      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total: {cart.reduce((total, item) => total + item.price * item.quantity, 0)} €</h3>
          <button className="checkout-btn" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
