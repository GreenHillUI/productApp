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
      <a href="#related-products">
        <img src={product.img} alt={`A thumbnail of ${product.name}`} />
      </a>
      <h3>{`${product.category}`}</h3>
      <h2>{`${product.name}`}</h2>
      <h3>{`$${product.price}`}</h3>
      <Stars rating={product.ratings} />
    </li>
  );
}

export default ProductsCardComponent;
