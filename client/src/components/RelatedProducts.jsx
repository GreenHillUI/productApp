import React from "react";
import { connect } from 'react-redux';
import Card from './RelatedProductCard';

const outfit = [];

/**
 * Renders two related product carrousels
 * also provides semantic strucure for styling
 */
function RelatedProductsComponent({ related }) {
  return (
    <div id="related-items">
      <h1>Related Products</h1>
      <ul className="product-carrousel">
        {related.map((product) => <Card key={product.id} product={product} />)}
      </ul>
      <h1>Your Outfit</h1>
      <ul className='product-carrousel'>
        {outfit.map((product) => <Card key={product.id} product={product} />)}
      </ul>
    </div>
  );
}

const RelatedProductContianer = connect(
  (state) => ({
    related: state.relatedProducts,
  })
)(RelatedProductsComponent);

export default RelatedProductContianer;
