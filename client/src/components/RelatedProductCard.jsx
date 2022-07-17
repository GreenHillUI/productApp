import React from "react";
import Stars from './Stars';

/**
 * Renders a card with information about a product
 * 
 * @param {props} product Product object retrieved from API to be rendered
 * @returns list item containing product card
 */
function RelatedProductsComponent({ product }) {
  return (
    <li>
      <img src={product.img} alt={`A thumbnail of ${product.name}`} width="50" height="100" />
      <h2>{`category: ${product.category}`}</h2>
      <h1>{`name: ${product.name}`}</h1>
      <h1>{`$${product.price}`}</h1>
      <Stars rating={product.ratings} />
    </li>
  );
}

export default RelatedProductsComponent;
