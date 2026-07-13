export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export type SortOrder = 'highest' | 'lowest' | 'none';

export interface FilterState {
  sortOrder: SortOrder;
  selectedCategories: string[];
}

export interface CategoryCount {
  category: string;
  count: number;
}