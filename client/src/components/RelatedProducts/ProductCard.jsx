import React from "react";
import Stars from '../Stars';

/**
 * Renders a card with information about a product
 * 
 * @param {props} product Product object retrieved from API to be rendered
 * @returns list item containing product card
 */
function ProductsCardComponent({ product }) {
  return (
    <li>
      <img src={product.img} alt={`A thumbnail of ${product.name}`} />
      <h2>{`${product.category}`}</h2>
      <h1>{`${product.name}`}</h1>
      <h2>{`$${product.price}`}</h2>
      <Stars rating={product.ratings} />
    </li>
  );
}

export default ProductsCardComponent;
