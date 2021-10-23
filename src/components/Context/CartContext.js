import React, { createContext, useState } from "react";

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <CartContext.Provider value={[carrito, setCarrito]}>
      {children}
    </CartContext.Provider>
  );
};

/* Pasar las props aca */

export default CartContext;
