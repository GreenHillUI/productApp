import React from "react";
import Card from './RelatedProductCard';

// Data is temporary obviously
// TODO: collect products from API/redux store
const related = [
  'Shirt',
  'Pant',
  'scurf',
];
const outfit = [
  'red shoes',
  'yeezees',
  'sick drip',
];

/**
 * Renders two related product carrousels
 * also provides semantic strucure for styling
 */
function RelatedProductsComponent() {
  return (
    <div id="related-items">
      <ul className="product-carrousel">
        {related.map((product) => <Card productName={product} />)}
      </ul>
      <ul className='product-carrousel'>
        {outfit.map((product) => <Card productName={product} />)}
      </ul>
    </div>
  );
}

export default RelatedProductsComponent;
