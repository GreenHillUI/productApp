/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Card from './ProductCard';

// the width in pixels that a card can be covered by the left/right gradient
const leniency = 25;

function scrollLeft(offset, viewport, cardWidth) {
  const cards = Math.floor((viewport + offset + leniency) / cardWidth) - 1;
  const margin = cards * cardWidth - viewport + end;
  return 
}
function scrollRight(offset, viewport, cardWidth) {
  const cards = Math.floor((viewport + offset + leniency) / cardWidth) + 1;
  return cards * cardWidth - viewport;
}

function RelatedProductsComponent({ related }) {

  const [offset, setOffset] = useState(0);
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    try {
      setSize(document.querySelector('.product-carrousel ul').childNodes.length);
      setWidth(document.querySelector('.product-carrousel').offsetWidth);
    } catch (e) { /* */ }
  });
  
  return (
    <section id="related-products">
      <h1>Related Products</h1>
      <div className="product-carrousel">

        <ul style={{ 'margin-left': -offset }}>
          {related.map((product) => <Card key={product.id} product={product} />)}
        </ul>

        {offset >= 0 ? (
          <button aria-label="left" type="button" onClick={() => setOffset(scrollLeft(offset, width - 125, 320))}>
            &#10094;
          </button>
        ) : null}
        {offset + width < size * 320 ? (
          <button aria-label="right" type="button" onClick={() => setOffset(scrollRight(offset, width - 125, 320))}>
            &#10095;
          </button>
        ) : null}

      </div>
    </section>
  );
}

const RelatedProductContianer = connect(
  (state) => ({
    related: state.relatedProducts,
  })
)(RelatedProductsComponent);

export default RelatedProductContianer;
