
import  { type Product } from '../types/product';

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: Props) => {
  return (
    <div className="border rounded-xl shadow-sm p-4 flex flex-col items-center gap-2 hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="h-40 object-contain" />
      <h2 className="text-sm font-semibold text-center">{product.title}</h2>
      <p className="text-lg font-bold text-blue-600">€{product.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => onAddToCart(product)}
      >
        Aggiungi al carrello
      </button>
    </div>
  );
};
