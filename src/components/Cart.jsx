import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
            <span>Quantity: {item.quantity}</span>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span>Total:</span>
        <span>₹{total}</span>
      </div>
    </div>
  );
};

export default Cart;