import type { CartItem } from "@/types/cart";
import { useCart } from "@/context/CartContext";
import {Table,TableHeader,TableBody,TableFooter,TableHead,TableRow,TableCell,TableCaption,} from "./ui/table"
import { Button } from "./ui/button"
import { useEffect, useState } from "react";
import type { Product } from "@/types/product";


export function CartCard({product}:{product:CartItem}) {


  const { cart, addToCart, removeFromCart, clearCart } = useCart()


  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 p-4 border rounded-md w-full max-w-screen-md mx-auto">
      <div className="sm:w-1/3 w-full mb-4 sm:mb-0 flex justify-center">
        <img src={product.image} alt={product.title} className="w-30 h-auto object-cover rounded" />
      </div>
      <div className="sm:w-2/3 w-full flex flex-col justify-between space-y-8">
        <p className="text-lg font-semibold">{product.title} | €{product.price}</p>
        <div className="flex justify-between text-sm">
          <span>Quantità: {product.quantity}</span>
          <span>Prezzo Totale: €{(product.price * product.quantity).toFixed(2)}</span>
          <span></span>
        </div>
        <div className="flex space-x-2">
          <Button
          onClick={()=>addToCart(product, "add")}
          className="px-3 py-1 bg-black text-white rounded hover:bg-green-600 w-10">+</Button>
          <Button 
          onClick={()=>addToCart(product, "reduce")}
          className="px-3 py-1 bg-black text-white rounded hover:bg-yellow-600 w-10">-</Button>
          <Button 
          onClick={()=>removeFromCart(product.id)}
          className="px-3 py-1 bg-red-900 text-white rounded hover:bg-red-600">Rimuovi</Button>
        </div>
      </div>
    </div>
  );
}


export function Resoconto({ products }: { products: CartItem[] }) {
  const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

return (
    <div className="border border-black rounded-md w-full max-w-sm p-4">
      <Table className="w-full">
        <TableCaption className="mb-2">
          <Button className="w-full">Prosegui al checkout</Button>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Prodotto</TableHead>
            <TableHead className="text-right">Prezzo Tot</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((p, index) => (
            <TableRow key={index}>
              <TableCell>{setString(p.title)}</TableCell>
              <TableCell className="text-right">€{(p.price * p.quantity).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="font-semibold">Totale</TableCell>
            <TableCell className="text-right font-semibold">€{total.toFixed(2)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}



function setString(string:string){
  return string.split("").slice(0,25).join("") + "..."
}