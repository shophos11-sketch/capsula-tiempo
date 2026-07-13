import { useRef, useState, useEffect } from "react";
import { FilterSidebar } from "../components/FilterSidebar";
import { ProductGrid } from "../components/ProductGrid";
import { useProductFilters } from "../hooks/useProductFilters";
import { Button } from "../components/ui/button";
import { MessageCircle } from "lucide-react";
import { Product } from "../types/product";
import Airtable from "airtable";

// 🔌 Conexión segura con Airtable
const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_TOKEN })
  .base(import.meta.env.VITE_AIRTABLE_BASE_ID);

export function Catalog() {
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Oculto por defecto en celular
  
  // Guardamos tanto la posición X como la Y para evitar que el scroll vertical interfiera
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const { filters, setFilters, filteredProducts, categoryCounts, resetFilters } =
    useProductFilters(dbProducts);

  // 📡 Traemos tus productos de Airtable
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

  // 📱 Captura de inicio del toque en celular
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  // 📱 Captura del movimiento del dedo para evitar conflictos con el scroll de la página
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = currentX - touchStartX.current;
    const diffY = currentY - touchStartY.current;

    // Si el movimiento horizontal es mayor que el vertical, asumimos que quiere filtrar
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 40) {
        setSidebarOpen(true); // Deslizar derecha -> abre
      } else if (diffX < -40) {
        setSidebarOpen(false); // Deslizar izquierda -> cierra
      }
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
      className="min-h-screen bg-background select-none"
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
        {/* Contenedor de la Barra de Filtros animada (Se encoge al 50% en móvil si se abre) */}
        <div
          className={[
            "transition-all duration-300 shrink-0",
            "md:w-80", // En PC mide 320px como siempre
            sidebarOpen ? "w-1/2 opacity-100" : "w-0 opacity-0 pointer-events-none", // En móvil 50% de la pantalla o 0%
          ].join(" ")}
        >
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            categoryCounts={categoryCounts}
            onResetFilters={resetFilters}
          />
        </div>

        {/* Contenedor de los Productos (Se reduce al 50% en móvil si la barra se abre) */}
        <div className={sidebarOpen ? "w-1/2 transition-all duration-300" : "w-full transition-all duration-300"}>
          <ProductGrid products={filteredProducts} sidebarOpen={sidebarOpen} loadingFromParent={loading} />
        </div>
      </div>
    </div>
  );
}
