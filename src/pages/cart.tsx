import { Resoconto, CartCard } from "@/components/CartComponents"
import type { Product } from "@/types/product";
import type { CartItem } from "@/types/cart";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";




export function Cart() {

  const { cart, addToCart, removeFromCart, clearCart } = useCart()
  const cartData = localStorage.getItem("cart")
  const [products, setProducts] = useState<CartItem[]>(cartData ? JSON.parse(cartData) : [])
  
  useEffect(()=>{

    setProducts(cart)
  },[cart])

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-6">
      <div className="w-full lg:w-2/3 space-y-4">
        {products.map((p, index) => (
          <CartCard key={index} product={p} />
        ))}
      </div>
      <div className="w-full sm:max-w-sm sm:mx-auto p-4">
        <Resoconto products={cart} />
      </div>
    </div>
  );
}