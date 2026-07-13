import { useRef, useState, useEffect } from "react";
import { FilterSidebar } from "../components/FilterSidebar";
import { ProductGrid } from "../components/ProductGrid";
import { useProductFilters } from "../hooks/useProductFilters";
import { Button } from "../components/ui/button";
import { MessageCircle } from "lucide-react";
import { Product } from "../types/product";
import Airtable from "airtable";

// 🔌 Conexión segura con Airtable (¡INTACTA!)
const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_TOKEN })
  .base(import.meta.env.VITE_AIRTABLE_BASE_ID);

export function Catalog() {
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Falso por defecto -> cerrada en móvil
  const touchStartX = useRef<number | null>(null);

  // Conectamos con el hook de filtros
  const { filters, setFilters, filteredProducts, categoryCounts, resetFilters } =
    useProductFilters(dbProducts);

  // 📡 Traemos los productos en vivo de Airtable
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

  // Gestos táctiles de Figma
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) setSidebarOpen(true);  // Deslizar a la derecha -> abre
    if (delta < -50) setSidebarOpen(false); // Deslizar a la izquierda -> cierra
    touchStartX.current = null;
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/", "_blank");
  };

  return (
    <div
      className="min-h-screen bg-background"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <header className="bg-card border-b px-6 py-3 flex items-center justify-between">
        <h1 className="text-sm font-medium">Masha Importaciones</h1>
        <Button onClick={handleWhatsAppClick} size="sm" className="gap-2">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </Button>
      </header>

      <div className="flex">
        {/* Contenedor de la barra: En cel usa w-1/2 (mitad) o w-0. En desktop siempre w-80 */}
        <div
          className={[
            "overflow-hidden transition-all duration-300 shrink-0",
            "md:w-80",
            sidebarOpen ? "w-1/2" : "w-0",
          ].join(" ")}
        >
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            categoryCounts={categoryCounts}
            onResetFilters={resetFilters}
          />
        </div>

        {/* Le pasamos el estado de carga de Airtable y si la barra está abierta */}
        <ProductGrid 
          products={filteredProducts} 
          sidebarOpen={sidebarOpen} 
          loadingFromParent={loading} 
        />
      </div>
    </div>
  );
}