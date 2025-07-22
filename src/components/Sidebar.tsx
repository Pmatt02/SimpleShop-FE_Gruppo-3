import { useFetchCategories } from '../hooks/useFetchCategories';
import { Link, useLocation } from 'react-router-dom';

type SidebarProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const { categories, loading } = useFetchCategories();
  const location = useLocation();

  if (loading) {
    return (
      <>
        <SidebarToggle isOpen={isOpen} onToggle={onToggle} />
        <div className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)] z-30 transition-all duration-300
          ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full'}
          bg-white shadow-lg border-r border-gray-200
        `}>
          <div className="p-4">
            <div className="animate-pulse space-y-3">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-100 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={onToggle}
        />
      )}

      <SidebarToggle isOpen={isOpen} onToggle={onToggle} />

      <aside className={`
        fixed top-16 left-0 h-[calc(100vh-4rem)] z-30 transition-all duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        w-64 bg-white shadow-lg border-r border-gray-200
        lg:translate-x-0 ${!isOpen ? 'lg:w-0 lg:overflow-hidden' : 'lg:w-64'}
      `}>
        {/* Close button in alto a destra nella sidebar */}
        {isOpen && (
          <button
            onClick={onToggle}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className="h-full overflow-y-auto">
          <div className="p-4">
            
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Categorie</h3>
              <div className="h-px bg-gray-200"></div>
            </div>

            <nav className="space-y-2">
              {/* Tutti i prodotti */}
              <Link 
                to="/" 
                className="block"
                onClick={() => window.innerWidth < 1024 && onToggle()}
              >
                <div className={`
                  px-4 py-3 rounded-lg transition-colors duration-200 flex items-center gap-3
                  ${location.pathname === '/' 
                    ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                    : 'text-gray-700 hover:bg-gray-50'
                  }
                `}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="font-medium">Tutti i prodotti</span>
                </div>
              </Link>

              {/* Categorie */}
              {categories.map((cat) => {
                const isActive = location.pathname.includes(cat);
                
                return (
                  <Link 
                     key={cat} 
                      to={`/?category=${encodeURIComponent(cat)}`}
                     className="block"
                      onClick={() => window.innerWidth < 1024 && onToggle()}
                  >
                    <div className={`
                      px-4 py-3 rounded-lg transition-colors duration-200 flex items-center gap-3
                      ${isActive 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                        : 'text-gray-700 hover:bg-gray-50'
                      }
                    `}>
                      <CategoryIcon category={cat} />
                      <span className="font-medium capitalize">
                        {cat.replace(/[_-]/g, ' ')}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

type SidebarToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const SidebarToggle = ({ isOpen, onToggle }: SidebarToggleProps) => {
  // Solo bottone hamburger quando sidebar è chiusa
  if (isOpen) return null;
  
  return (
    <button
      onClick={onToggle}
      className="fixed top-20 left-4 z-40 w-10 h-10 rounded-lg transition-all duration-200 bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg"
    >
      <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
};

type CategoryIconProps = {
  category: string;
};

const CategoryIcon = ({ category }: CategoryIconProps) => {
  const iconClass = "w-5 h-5";
  
  if (category.includes('electronic') || category.includes('tech')) {
    return (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    );
  }
  
  if (category.includes('cloth') || category.includes('fashion')) {
    return (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  }

  if (category.includes('jewel') || category.includes('accessory')) {
    return (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 22 12 18.77 5.82 22 7 13.87 2 9l6.91-.74L12 2z" />
      </svg>
    );
  }

  return (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
    </svg>
  );
};