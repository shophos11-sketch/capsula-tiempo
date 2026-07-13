import { useState, useMemo } from 'react';
import { Product, FilterState, CategoryCount } from '../types/product';
import { categories } from '../data/products';

const initialFilters: FilterState = {
  sortOrder: 'none',
  selectedCategories: []
};

export function useProductFilters(products: Product[]) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Category filter
      if (filters.selectedCategories.length > 0 && !filters.selectedCategories.includes(product.category)) {
        return false;
      }

      return true;
    });

    // Apply sorting
    if (filters.sortOrder === 'highest') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (filters.sortOrder === 'lowest') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    }

    return filtered;
  }, [products, filters]);

  const categoryCounts = useMemo((): CategoryCount[] => {
    return categories.map(category => {
      const count = products.filter(product => product.category === category).length;
      return { category, count };
    });
  }, [products]);

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return {
    filters,
    setFilters,
    filteredProducts,
    categoryCounts,
    resetFilters
  };
}
