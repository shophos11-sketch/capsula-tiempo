import { useRef, useState, useEffect } from "react";
import { FilterSidebar } from "../components/FilterSidebar";
import { ProductGrid } from "../components/ProductGrid";
import { useProductFilters } from "../hooks/useProductFilters";
import { Button } from "../components/ui/button";
import { MessageCircle } from "lucide-react";
import { Product } from "../types/product";
import Airtable from "airtable";

// 🔌 Conexión segura con Airtable intacta
const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_TOKEN })
  .base(import.meta.env.VITE_AIRTABLE_BASE_ID);

export function Catalog() {
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const { filters, setFilters, filteredProducts, categoryCounts, resetFilters } =
    useProductFilters(dbProducts);

  // 📡 Hook de Airtable restablecido
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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = currentX - touchStartX.current;
    const diffY = currentY - touchStartY.current;

    // Solo disparamos el gesto si es un movimiento prioritariamente horizontal
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 40) setSidebarOpen(true);
      if (diffX < -40) setSidebarOpen(false);
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/", "_blank");
  };

  return (
    <div
      className="min-h-screen bg-background"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <header className="bg-card border-b px-6 py-3 flex items-center justify-between">
        <h1 className="text-sm font-medium">Masha Importaciones</h1>
        <Button onClick={handleWhatsAppClick} size="sm" className="gap-2">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </Button>
      </header>

      <div className="flex w-full overflow-hidden">
        {/* 💻 En PC: Siempre md:w-80 estático. 📱 En Celular: Se reparte 50% (w-1/2) o se oculta (w-0) */}
        <div
          className={[
            "overflow-hidden transition-all duration-300 shrink-0",
            sidebarOpen ? "w-1/2 md:w-80" : "w-0 md:w-80",
          ].join(" ")}
        >
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            categoryCounts={categoryCounts}
            onResetFilters={resetFilters}
          />
        </div>

        {/* Contenedor dinámico del Grid para completar la división 50/50 */}
        <div className={`transition-all duration-300 ${sidebarOpen ? "w-1/2 md:w-full" : "w-full"}`}>
          <ProductGrid products={filteredProducts} sidebarOpen={sidebarOpen} loadingFromParent={loading} />
        </div>
      </div>
    </div>
  );
}