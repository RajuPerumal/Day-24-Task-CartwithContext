import React, { createContext, useState } from "react";

// Create a context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { product, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};
