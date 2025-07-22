// src/components/ProductCard.tsx
import { type Product } from '../types/product';

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between h-full">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-contain mb-4"
        />
        <h2 className="text-sm font-semibold mb-2 line-clamp-2 h-10">{product.title}</h2>
        <p className="text-sm text-gray-500 mb-2">
          ⭐ {product.rating.rate} ({product.rating.count})
        </p>
        <p className="text-lg font-bold text-blue-600 mb-4">€{product.price}</p>
      </div>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600"
      >
        Aggiungi al carrello
      </button>
    </div>
  );
};
