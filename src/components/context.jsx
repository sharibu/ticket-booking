import React, { createContext, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [count, setCount] = useState(() =>
    cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCount(totalItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const itemExists = cartItems.find(cartItem => cartItem._id === item._id);
    if (itemExists) {
      toast.warn("Already in the cart!");
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      toast.success(`${item.name} added to the cart!`);
    }
  };

  return (
    <CartContext.Provider value={{ count, cartItems, addToCart }}>
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};