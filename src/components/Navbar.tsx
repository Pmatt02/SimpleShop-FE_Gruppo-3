import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const { cart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      sticky top-0 z-50 transition-all duration-300
      ${scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md' 
        : 'bg-white shadow-sm'
      }
      border-b border-gray-200
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                Simple 
              </span>
              <span className="text-xs text-gray-500 -mt-1">
                Shop
              </span>
            </div>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-4">

            {/* Cart */}
            <Link to="/cart" className="group relative">
              <div className={`
                flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200
                ${totalItems > 0 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}>
                
                <div className="relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5H20" />
                  </svg>
                  
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {totalItems > 9 ? '9+' : totalItems}
                    </span>
                  )}
                </div>

                <span className="font-medium hidden sm:block">
                  Carrello
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};