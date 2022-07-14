import React from "react";

/**
 * Renders a card with information about a product
 * 
 * @param {props} product Product object retrieved from API to be rendered
 * @returns list item containing product card
 */
function RelatedProductsComponent({ product }) {
  return (
    <li>
      {product.name}
    </li>
  );
}

export default RelatedProductsComponent;
