import React from 'react';

export const ProductCategoryRow = ({ category }) => (
  <tr>
    <th colSpan={2}>{category}</th>
  </tr>
);

export const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

