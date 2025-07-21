import { useFetchProducts } from '../hooks/useFetchProducts';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  const { products, loading, error } = useFetchProducts();
  const { addToCart } = useCart();

  
  if (loading) return <div className="text-center mt-10">Caricamento...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <Link to={'/cart'}> vai al carrello</Link>
      <h1 className="text-2xl font-bold mb-6">Catalogo Prodotti</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} onAddToCart={addToCart} />;
        })}
      </div>
    </div>
  );
};
