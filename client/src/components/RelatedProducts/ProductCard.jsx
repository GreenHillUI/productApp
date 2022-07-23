import React from "react";
import { connect } from 'react-redux';
import Stars from '../Stars';

/**
 * Renders a card with information about a product
 * 
 * @param {props} product Product object retrieved from API to be rendered
 * @returns list item containing product card
 */
function ProductsCardComponent({ product, setProductId }) {
  return (
    <li>
      <button type="button" className="product-button" onClick={() => setProductId(product.id)}>
        <img src={product.img} alt={`A thumbnail of ${product.name}`} />
      </button>
      <h3>{`${product.category}`}</h3>
      <h2>{`${product.name}`}</h2>
      <h3>{`$${product.price}`}</h3>
      <Stars rating={product.ratings} />
    </li>
  );
}

const ProductsCardContainer = connect(
  null,
  (dispatch) => ({
    setProductId: (id) => dispatch({ type: 'SETPRODUCTID', id })
  })
)(ProductsCardComponent);

export default ProductsCardContainer;
