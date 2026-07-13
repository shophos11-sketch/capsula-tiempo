import { useState, useEffect } from "react";
import { FilterSidebar } from "../components/FilterSidebar";
import { ProductGrid } from "../components/ProductGrid";
import { useProductFilters } from "../hooks/useProductFilters";
import { Button } from "../components/ui/button";
import { MessageCircle } from "lucide-react";
import { Product } from "../types/product";
import Airtable from "airtable";

// 🔌 Conexión segura para calcular los contadores de filtros
const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_TOKEN })
  .base(import.meta.env.VITE_AIRTABLE_BASE_ID);

export function Catalog() {
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔄 Conectamos los productos en vivo con el hook de filtros de Figma
  const { filters, setFilters, filteredProducts, categoryCounts, resetFilters } =
    useProductFilters(dbProducts);

  useEffect(() => {
    const cargarProductosParaFiltros = async () => {
      try {
        const registros = await base('Productos').select({ view: 'Grid view' }).all();
        const mapeados: Product[] = registros.map(reg => {
          const imagenes = reg.fields['Imagen'] as any[];
          return {
            id: reg.id,
            name: (reg.fields['Nombre'] as string) || 'Producto sin nombre',
            price: (reg.fields['Precio'] as number) || 0,
            category: (reg.fields['Categoría'] as string) || 'Sin categoría',
            image: imagenes?.[0]?.url || 'https://via.placeholder.com/400',
            description: (reg.fields['Descripción'] as string) || '',
            stock: (reg.fields['Unidades disponibles'] as number) || 0,
          };
        });
        setDbProducts(mapeados);
      } catch (e) {
        console.error("Error cargando filtros:", e);
      } finally {
        setLoading(false);
      }
    };
    cargarProductosParaFiltros();
  }, []);

  const handleWhatsAppClick = () => {
    // Puedes poner tu número de WhatsApp real aquí en el futuro ej: https://wa.me/51999999999
    window.open("https://wa.me/", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b px-6 py-3 flex items-center justify-between">
        <h1 className="text-sm font-medium">Masha Importaciones</h1>
        <Button onClick={handleWhatsAppClick} size="sm" className="gap-2">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </Button>
      </header>
      
      <div class="flex flex-col md:flex-row gap-6">
        <FilterSidebar
          filters={filters}
          onFiltersChange={setFilters}
          categoryCounts={categoryCounts}
          onResetFilters={resetFilters}
        />
        
        {/* Aquí le pasamos los productos ya filtrados por la barra lateral */}
        <ProductGrid products={filteredProducts} loadingFromParent={loading} />
      </div>
    </div>
  );
}
