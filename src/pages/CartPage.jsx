// src/pages/CartPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/CartPage.css";

function CartPage({ cart = [], removeFromCart }) {
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-details">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>{item.price} € x {item.quantity}</p>
                </div>
                <div className="cart-item-actions">
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
              <div className="cart-item-total">
                <p>{item.price * item.quantity} €</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty</p>
      )}

      <div className="cart-summary">
        <h3>Total: {cart.reduce((total, item) => total + item.price * item.quantity, 0)} €</h3>
        {cart.length > 0 && (
          <button onClick={() => navigate("/checkout")} className="checkout-btn">
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default CartPage;
