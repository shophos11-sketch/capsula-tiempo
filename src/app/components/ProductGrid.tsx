import { Product } from '../types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
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

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Todas las Categorías</h1>
        <p className="text-muted-foreground">
          Mostrando {products.length} producto{products.length !== 1 ? 's' : ''}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}