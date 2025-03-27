import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Check if item already exists in cart
    const existingItem = cartItems.find(cartItem => cartItem._id === item._id);
    
    if (existingItem) {
      // If item exists, increase quantity
      setCartItems(prevItems =>
        prevItems.map(cartItem =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If item doesn't exist, add it with quantity 1
      setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
  };

  const count = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, count, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};