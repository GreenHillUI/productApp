/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Card from './ProductCard';

// the width in pixels that a card can be covered by the left/right gradient
const leniency = 25;

function scrollLeft(offset, cardWidth) {
  const cards = Math.ceil((offset + 125) / cardWidth) - 1;
  if (cards <= 0) return 0;
  return cards * cardWidth - 125;
}
function scrollRight(offset, viewport, cardWidth, size) {
  const cards = Math.floor((viewport + offset + leniency) / cardWidth) + 1;
  const margin = cards * cardWidth - viewport;
  if (cards >= size) return margin - 125;
  return margin;
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

        <ul style={{ marginLeft: -offset }}>
          {related.map((product) => <Card key={product.id} product={product} />)}
        </ul>

        <button
          disabled={offset <= 0}
          className={offset <= 0 ? 'hide' : ''}
          aria-label="left"
          type="button"
          onClick={() => setOffset(scrollLeft(offset, 320))}
        >
          &#10094;
        </button>
        <button
          disabled={offset + width >= size * 320}
          className={offset + width >= size * 320 ? 'hide' : ''}
          aria-label="right"
          type="button"
          onClick={() => setOffset(scrollRight(offset, width - 125, 320, size))}
        >
          &#10095;
        </button>

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
