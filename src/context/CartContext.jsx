import React, { createContext, useState, useEffect } from 'react';
import { getCartFromStorage, saveCartToStorage } from '../utils/cartUtils.js';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Ensure cart is always an array
  const [cart, setCart] = useState(() => getCartFromStorage() || []);

  useEffect(() => {
    // Only save to storage if cart changes
    if (cart) {
      saveCartToStorage(cart);
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, amount) => {
    setCart(prev => 
      prev.map(item =>
        item.id === id 
        ? { ...item, quantity: Math.max(item.quantity + amount, 1) } // Ensures quantity doesn't go below 1
        : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
