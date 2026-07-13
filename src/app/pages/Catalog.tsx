import { FilterSidebar } from "../components/FilterSidebar";
import { ProductGrid } from "../components/ProductGrid";
import { useProductFilters } from "../hooks/useProductFilters";
import { products } from "../data/products";
import { Button } from "../components/ui/button";
import { MessageCircle } from "lucide-react";

export function Catalog() {
  const { filters, setFilters, filteredProducts, categoryCounts, resetFilters } =
    useProductFilters(products);

  const handleWhatsAppClick = () => {
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
      <div className="flex">
        <FilterSidebar
          filters={filters}
          onFiltersChange={setFilters}
          categoryCounts={categoryCounts}
          onResetFilters={resetFilters}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
