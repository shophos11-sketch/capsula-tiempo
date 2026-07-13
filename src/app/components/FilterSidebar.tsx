import { FilterState, CategoryCount } from '../types/product';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Label } from './ui/label';

interface FilterSidebarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  categoryCounts: CategoryCount[];
  onResetFilters: () => void;
}

export function FilterSidebar({ 
  filters, 
  onFiltersChange, 
  categoryCounts, 
  onResetFilters 
}: FilterSidebarProps) {
  const handleSortChange = (value: string) => {
    onFiltersChange({
      ...filters,
      sortOrder: value as FilterState['sortOrder']
    });
  };

  const handleCategoryToggle = (category: string) => {
    const updatedCategories = filters.selectedCategories.includes(category)
      ? filters.selectedCategories.filter(c => c !== category)
      : [...filters.selectedCategories, category];
    
    onFiltersChange({
      ...filters,
      selectedCategories: updatedCategories
    });
  };

  return (
    // Quitamos los anchos fijos contradictorios para amoldarse al split animado
    <div className="w-full h-full bg-card border-r p-6 space-y-6 min-w-[160px] md:min-w-[200px]">
      <div className="flex items-center justify-between">
        <h2>Filtros</h2>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onResetFilters}
          className="text-sm"
        >
          Limpiar
        </Button>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3>Ordenar por precio</h3>
        <RadioGroup value={filters.sortOrder} onValueChange={handleSortChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="highest" id="highest" />
            <Label htmlFor="highest" className="cursor-pointer text-sm">Mayor precio</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="lowest" id="lowest" />
            <Label htmlFor="lowest" className="cursor-pointer text-sm">Menor precio</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="none" />
            <Label htmlFor="none" className="cursor-pointer text-sm">Sin ordenar</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3>Categorías</h3>
        <div className="space-y-3">
          {categoryCounts.map((categoryCount) => (
            <div key={categoryCount.category} className="flex items-center space-x-3">
              <Checkbox
                id={categoryCount.category}
                checked={filters.selectedCategories.includes(categoryCount.category)}
                onCheckedChange={() => handleCategoryToggle(categoryCount.category)}
              />
              <label 
                htmlFor={categoryCount.category}
                className="flex-1 text-sm cursor-pointer flex items-center justify-between min-w-0"
              >
                <span className="truncate mr-1">{categoryCount.category}</span>
                <Badge variant="secondary" className="text-xs shrink-0">
                  {categoryCount.count}
                </Badge>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}