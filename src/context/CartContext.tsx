import { createContext, useContext, useEffect, useState } from 'react';
import { type Product } from '../types/product';
import { type CartItem } from '../types/cart';
type AddRedduce = 'add' | 'reduce' // tipo per permettere ad addToCart() sia di aggiungere che di rimuovere


interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, option:AddRedduce) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const currentCart = localStorage.getItem("cart")
    if (currentCart === null) {
      return []
    }
    return JSON.parse(currentCart);
  });

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const addToCart = (product: Product, option:AddRedduce) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if(option === "reduce"){
        if (existing) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity===1? item.quantity - 0:item.quantity -1 } : item
          );
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      }else{
        if (existing) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      }

    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart deve essere usato dentro CartProvider');
  return context;
};
