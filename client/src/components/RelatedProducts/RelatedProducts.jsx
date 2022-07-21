import React, { useState } from "react";
import { connect } from 'react-redux';
import Card from './ProductCard';

const outfit = [];


function RelatedProductsComponent({ related }) {

  const [offset, setOffset] = useState(0);
  
  return (
    <section id="related-products">
      <h1>Related Products</h1>
      <div className="product-carrousel">

        <ul style={{ 'margin-left': -offset }}>
          {related.map((product) => <Card key={product.id} product={product} />)}
        </ul>

        <button
          type="button"
          className="back"
          onClick={() => setOffset(offset + 400)}
        >
          &#10094;
        </button>

        <button
          type="button"
          className="forward"
          onClick={() => setOffset(offset - 400)}
        >
          &#10095;
        </button>
      </div>
      {/* <h1>Your Outfit</h1>
      <ul className='product-carrousel'>
        {outfit.map((product) => <Card key={product.id} product={product} />)}
      </ul> */}
    </section>
  );
}

const RelatedProductContianer = connect(
  (state) => ({
    related: state.relatedProducts,
  })
)(RelatedProductsComponent);

export default RelatedProductContianer;
