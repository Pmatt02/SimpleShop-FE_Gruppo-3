import { useFetchProducts } from '../hooks/useFetchProducts';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { Sidebar } from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';


export const Homepage = () => {
  const { products, loading, error } = useFetchProducts();
  const { addToCart } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  //recupero parametri dalla query string
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  //filtro i prodotti per categoria e per ricerca
  const filteredProducts = products.filter((product) => {
  const matchesCategory = category ? product.category === category : true;
  return matchesCategory;
  });


  if (loading) return <div className="text-center mt-10">Caricamento...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Sidebar component */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      {/* Main content wrapper with proper spacing */}
      <div className={`
        transition-all duration-500 ease-out
        ${isSidebarOpen ? 'lg:ml-72' : 'lg:ml-0'}
        pt-20 pb-6
      `}>
        <main className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-800">
                Catalogo Prodotti
              </h1>
              <p className="text-slate-600 mt-2">
                Scopri la nostra selezione di prodotti
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {filteredProducts.map((product) => (
    <           div key={product.id} className="h-full">
                  <ProductCard 
                    product={product} 
                    onAddToCart={(product) => addToCart(product, "add")} 
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};