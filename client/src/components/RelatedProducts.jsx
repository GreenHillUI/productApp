import React from "react";
import { connect } from 'react-redux';
import Card from './RelatedProductCard';

// Data is temporary obviously
// TODO: collect products from API/redux store
// const related = [
//   'Shirt',
//   'Pant',
//   'scurf',
// ];
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
        {related.concat(related).map((product) => <Card key={product.id} product={product} />)}
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
