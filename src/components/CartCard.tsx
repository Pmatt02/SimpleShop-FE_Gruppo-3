import type { CartItem } from "@/types/cart";
import { useCart } from "@/context/CartContext";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import type { Product } from "@/types/product";

export function CartCard({ product }: { product: CartItem }) {
  const { addToCart, removeFromCart } = useCart();

    const navigate = useNavigate()

  const detail = (product:Product)=>{
    navigate(`/product/${product.id}`) 
  }
  return (
    <div className="flex flex-col sm:flex-row sm:items-stretch sm:space-x-4 p-4 bg-white rounded-lg shadow w-full max-w-screen-md mx-auto">
      <div className="sm:w-1/3 w-full mb-4 sm:mb-0 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          onClick={()=>{detail(product)}}
          className="w-30 object-contain rounded hover:cursor-pointer"
        />
      </div>
      <div className="sm:w-2/3 w-full flex flex-col justify-between space-y-8">
        <p 
        onClick={()=>{detail(product)}}
        className="text-lg font-semibold ">
          <span className="hover:text-blue-600 hover:cursor-pointer">{product.title}</span>
          <br />
          <span className="hover:text-blue-600 hover:cursor-pointer">€{product.price}</span>
        </p>
        <div className="flex justify-between text-sm font-bold">
          <span>Quantità: {product.quantity}</span> 
          <span>
            Prezzo Totale: €{(product.price * product.quantity).toFixed(2)}
          </span>
          <span></span>
        </div>
        <div className="flex space-x-2">
          <Button
            onClick={() => addToCart(product, "add")}
            className="w-9 align-middle bg-blue-500 text-white rounded hover:bg-blue-600 text-2xl hover:cursor-pointer"
          >
            +
          </Button>
          <Button
            onClick={() => addToCart(product, "reduce")}
            className="w-9 align-middle bg-blue-500 text-white rounded hover:bg-blue-600 text-2xl hover:cursor-pointer"
          >
            -
          </Button>
          <Button
            onClick={() => removeFromCart(product.id)}
            className="px-3 py-1 bg-red-700 text-white rounded hover:bg-red-600 hover:cursor-pointer"
          >
            Rimuovi
          </Button>
        </div>
      </div>
    </div>
  );
}
