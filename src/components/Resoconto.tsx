import type { CartItem } from "@/types/cart";
import {Table,TableHeader,TableBody,TableFooter,TableHead,TableRow,TableCell,TableCaption,} from "./ui/table"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom";

export function Resoconto({ products }: { products: CartItem[] }) {
  const navigate = useNavigate();
  const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);
  
  return (
    <div className="border border-black rounded-md w-full max-w-sm p-4">
      <Table className="w-full">
        <TableCaption className="mb-2">
          <Button onClick={() => navigate("/checkout")} className="w-full">Prosegui al checkout</Button>
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