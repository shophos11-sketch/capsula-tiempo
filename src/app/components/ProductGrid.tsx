import { Product } from '../types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  sidebarOpen?: boolean;
  loadingFromParent?: boolean; // Mantenemos el estado de carga
}

export function ProductGrid({ 
  products, 
  sidebarOpen = false, 
  loadingFromParent = false 
}: ProductGridProps) {
  
  // Si Airtable está cargando, mostramos la pantalla de carga limpia
  if (loadingFromParent) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-96">
        <p className="text-muted-foreground animate-pulse text-lg">Cargando catálogo...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-96">
        <div className="text-center space-y-4">
          <div className="text-6xl">😔</div>
          <h2 className="text-xl font-medium">No hay productos que coincidan</h2>
          <p className="text-muted-foreground">
            Intenta ajustar tus filtros o seleccionar diferentes categorías
          </p>
        </div>
      </div>
    );
  }

  // 📱 Mobile: 1 columna cuando la barra está abierta (sidebarOpen === true)
  //            2 columnas cuando está oculta (sidebarOpen === false)
  const gridCols = sidebarOpen
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    : "grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <div className="flex-1 p-4 md:p-6 min-w-0">
      <div className="mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-semibold mb-1">Todas las Categorías</h1>
        <p className="text-muted-foreground text-sm">
          Mostrando {products.length} producto{products.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className={`grid gap-3 md:gap-6 transition-all duration-300 ${gridCols}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}