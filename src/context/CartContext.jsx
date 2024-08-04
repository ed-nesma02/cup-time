import {createContext, useContext, useEffect, useState} from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const storeCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storeCart);
  }, []);

  useEffect(() => {
    if (Array.isArray(cart)) localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    const newCart = [...cart];

    const itemIndex = newCart.findIndex((item) => item.id == product.id);

    if (itemIndex >= 0) {
      newCart[itemIndex].quantity += quantity;
    } else {
      newCart.push({...product, quantity});
    }

    setCart(newCart);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateCart = (productId, quantity) => {
    if (quantity > 0) {
      setCart(
        cart.map((item) => (item.id === productId ? {...item, quantity} : item))
      );
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, updateCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
