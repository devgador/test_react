import { useState, useMemo } from 'react';

export function useProductFilter(products) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (inStockOnly && !product.stocked) {
        return false;
      }
      return product.name.toLowerCase().includes(filterText.toLowerCase());
    });
  }, [products, filterText, inStockOnly]);

  return {
    filterText,
    setFilterText,
    inStockOnly,
    setInStockOnly,
    filteredProducts
  };
}

