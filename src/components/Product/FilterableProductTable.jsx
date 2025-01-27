import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { useProductFilter } from '../../hooks/useProductFilter';

const FilterableProductTable = ({ products }) => {
  const { filterText, setFilterText, inStockOnly, setInStockOnly, filteredProducts } = useProductFilter(products);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default FilterableProductTable;

