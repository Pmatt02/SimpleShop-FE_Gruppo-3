//interface of product/:id
import type { Product } from "@/types/product";



export function ProductUI({product}:{product:Product | undefined}){




    return(
        <>
<div className="flex flex-col md:flex-row items-start justify-center mx-auto mt-10 max-w-5xl gap-6">
  {/* Immagine a sinistra */}
  <div className="md:w-1/2 h-96 w-full flex justify-center p-3 border  border-black rounded-2xl">
    <img
      src={product?.image}
      alt={product?.title}
      className="w-full max-w-sm h-auto object-contain "
    />
  </div>

  {/* Dettagli a destra */}
  <div className="md:w-1/2 h-96 w-full flex flex-col justify-start">
    {/* Titolo e Prezzo */}
    <div className="bg-black text-white p-4 rounded-xl border border-white mb-4">
      <p className="text-xl font-semibold">{product?.title} | €{product?.price}</p>
    </div>

    {/* Descrizione */}
    <div className="bg-gray-100 h-52 p-4 rounded-xl border border-gray-400 mb-4">
      <p className="text-sm">{product?.description}</p>
    </div>

    {/* Rating */}
    <div className="p-2 rounded-xl border border-gray-300 bg-white mb-4">
      <p>⭐{product?.rating?.rate}({product?.rating?.count})</p>
    </div>

    {/* Bottone Aggiungi al Carrello */}
    <button className="bg-black text-white font-semibold hover:bg-blue-600 py-2 px-4 rounded-xl transition duration-300">
      Aggiungi al carrello
    </button>
  </div>
</div>
        </>
    )
}