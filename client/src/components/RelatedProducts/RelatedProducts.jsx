import React from "react";
import { connect } from 'react-redux';
import Card from './ProductCard';

const outfit = [];

/**
 * Renders two related product carrousels
 * also provides semantic strucure for styling
 */
function RelatedProductsComponent({ related }) {
  return (
    <section id="related-products">
      <div className="product-carrousel">
        <h1>Related Products</h1>
        <ul>
          {related.map((product) => <Card key={product.id} product={product} />)}
        </ul>
        <button type="button" className="back">&#10094;</button>
        <button type="button" className="foreward">&#10095;</button>
      </div>
      <h1>Your Outfit</h1>
      <ul className='product-carrousel'>
        {outfit.map((product) => <Card key={product.id} product={product} />)}
      </ul>
    </section>
  );
}

const RelatedProductContianer = connect(
  (state) => ({
    related: state.relatedProducts,
  })
)(RelatedProductsComponent);

export default RelatedProductContianer;
