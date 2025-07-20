
import { type CartCardType} from "@/types/CartCardType"
import {Table,TableHeader,TableBody,TableFooter,TableHead,TableRow,TableCell,TableCaption,} from "./ui/table"
import { Button } from "./ui/button"


export function CartCard({ img, nome, quantita, prezzo }: CartCardType) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 p-4 border rounded-md w-full max-w-screen-md mx-auto">
      <div className="sm:w-1/3 w-full mb-4 sm:mb-0">
        <img src={img} alt={nome} className="w-full h-auto object-cover rounded" />
      </div>
      <div className="sm:w-2/3 w-full flex flex-col justify-between space-y-4">
        <p className="text-lg font-semibold">{nome} | €{prezzo}</p>
        <div className="flex justify-between text-sm">
          <span>Quantità: {quantita}</span>
          <span>Prezzo Totale: €{prezzo * quantita}</span>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">+</button>
          <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">-</button>
          <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Rimuovi</button>
        </div>
      </div>
    </div>
  );
}


// const prodotti:{nomeProdotto: string, prezzo:number, quantita:number}[] = [
//   {
//     nomeProdotto: "superSantos",
//     prezzo: 5,
//     quantita: 2
//   },
//   {
//     nomeProdotto: "polo",
//     prezzo:20,
//     quantita: 3
//   }
// ]

export function Resoconto({ prodotti }: { prodotti: CartCardType[] }) {
  const totale = prodotti.reduce((acc, p) => acc + p.prezzo * p.quantita, 0);

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
          {prodotti.map((prodotto, index) => (
            <TableRow key={index}>
              <TableCell>{prodotto.nome}</TableCell>
              <TableCell className="text-right">€{prodotto.prezzo * prodotto.quantita}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="font-semibold">Totale</TableCell>
            <TableCell className="text-right font-semibold">€{totale}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}