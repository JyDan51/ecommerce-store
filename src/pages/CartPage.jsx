// CartPage.jsx - Контроль корзины
import React, { useContext } from 'react';
import '../style/CartPage.css';
import { CartContext } from '../context/CartContext';

function CartPage() {
  const { cart, addToCart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <div className='cart-page'>
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <div className='cart-list'>
          {cart.map((item) => (
            <div className='cart-item' key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className='cart-info'>
                <h4>{item.name}</h4>
                <p>{item.price} € x {item.quantity}</p>
                <div className='quantity-controls'>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <button className='remove-btn' onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}

      {cart.length > 0 && (
        <div className='cart-summary'>
          <h3>Total: {cart.reduce((total, item) => total + item.price * item.quantity, 0)} €</h3>
          <button className='checkout-btn' onClick={clearCart}>Clear Cart</button>
          <button className='checkout-btn'>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
