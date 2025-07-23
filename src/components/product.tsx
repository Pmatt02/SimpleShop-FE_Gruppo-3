//interface of product/:id
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";

export function ProductUI({ product }: { product: Product }) {
  const { addToCart } = useCart();

  function add(product: Product) {
    return product
      ? addToCart(product, "add")
      : console.log("product not found");
  }

  return (
    <>
      <div className="flex pb-5 flex-col md:flex-row items-start justify-center mx-auto mt-10 max-w-5xl gap-6">
        <div className="md:w-1/2 h-96 w-full flex justify-center p-3 bg-white rounded-lg shadow">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full max-w-sm h-auto object-contain "
          />
        </div>

        <div className="md:w-1/2 h-96 w-full flex flex-col justify-start">
          <div className="bg-white rounded-lg shadow text-black p-4  border border-white mb-4">
            <p className="text-xl font-semibold">
              <span>{product?.title}</span>
              <br />
              <span className="text-blue-700 font-bold">€{product?.price}</span>
            </p>
          </div>

          <div className="bg-gray-100 h-52 p-4 rounded-xl border border-gray-400 mb-4">
            <p className="text-sm">{product?.description}</p>
          </div>

          <div className="p-2 rounded-xl border border-gray-300 bg-white mb-4">
            <p>
              ⭐{product?.rating?.rate}({product?.rating?.count})
            </p>
          </div>

          <button
            onClick={() => add(product)}
            className="bg-blue-500 text-white font-semibold hover:bg-blue-600 py-2 px-4 rounded-xl transition duration-300 hover:cursor-pointer"
          >
            Aggiungi al carrello
          </button>
        </div>
      </div>
    </>
  );
}
