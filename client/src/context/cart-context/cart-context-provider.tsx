"use client";
import React, { useState } from "react";
import CartContext, { ContextState, ContextDispatch } from "./cart-context";

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [drawer, setDrawer] = useState<boolean>(false);

  const contextState: ContextState = {
    drawer,
  };
  const contextDispatch: ContextDispatch = {
    setDrawer,
  };

  return (
    <CartContext.Provider value={{ ...contextState, ...contextDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
