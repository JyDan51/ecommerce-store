import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCart, removeFromCart } from "../api/cart";
import "../style/CartPage.css";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      fetchCart(token).then(data => {
        setCartItems(data.items || []);
      }).catch(err => console.error("Failed to load cart:", err));
    }
  }, [token]);

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId, token);
      setCartItems(prev => prev.filter(item => item.productId._id !== productId));
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.productId.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.productId._id}>
              <img src={item.productId.image} alt={item.productId.name} className="cart-item-image" />
              <div className="cart-info">
                <h4>{item.productId.name}</h4>
                <p>{item.productId.price} € x {item.quantity}</p>
              </div>
              <button className="remove-btn" onClick={() => handleRemove(item.productId._id)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty</p>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: {calculateTotal()} €</h3>
          <button className="checkout-btn" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
