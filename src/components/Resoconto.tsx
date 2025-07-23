import type { CartItem } from "@/types/cart";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";

export function Resoconto({ products }: { products: CartItem[] }) {
  const navigate = useNavigate();
  const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const {clearCart} = useCart()

  const svuota=()=>{
    setTimeout(()=>{
      clearCart()
    },500)
  }





  
  return (
<div className="bg-white rounded-lg shadow w-full sm:max-w-sm py-2 px-4 space-y-2">
<p className="flex justify-between mr-4 text-2xl font-medium"><span>Product</span> <span>Price</span></p>
<div className="max-h-40 overflow-y-auto space-y-2">
  {products.map((p, index) => (
    <div key={index} className="flex justify-between text-sm h-8 items-center">
      <span className="truncate">{setString(p.title)}</span>
      <span>€{(p.price * p.quantity).toFixed(2)}</span>
    </div>
  ))}
</div>

  <div className="flex justify-between font-semibold text-sm pt-1 border-t border-gray-200">
    <span>Totale</span>
    <span>€{total.toFixed(2)}</span>
  </div>

  <div>
    <button
      onClick={() => navigate("/checkout")}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded hover:cursor-pointer"
    >
      Prosegui al checkout
    </button>
  </div>

  <div>
    <button
      onClick={() => svuota()}
      className="w-full bg-red-700 hover:bg-red-600 text-white py-2 rounded hover:cursor-pointer"
    >
      Svuota carrello
    </button>
  </div>
</div>


  );
}



function setString(string:string){
  return string.split("").slice(0,25).join("") + "..."
}