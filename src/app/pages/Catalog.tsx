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

  // 🔄 Conectamos los productos en vivo de Airtable con el hook de filtros
  const { filters, setFilters, filteredProducts, categoryCounts, resetFilters } =
    useProductFilters(dbProducts);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // 📡 Efecto que trae tus productos reales de Airtable (¡RECUPERADO!)
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

  // 📱 Gestos táctiles de Figma para abrir/cerrar filtros
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) setSidebarOpen(true);
    if (delta < -50) setSidebarOpen(false);
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
        {/* Contenedor del Filtro adaptable de Figma */}
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

        {/* Carga el Grid pasándole si el sidebar está abierto o no */}
        <ProductGrid products={filteredProducts} sidebarOpen={sidebarOpen} />
      </div>
    </div>
  );
}