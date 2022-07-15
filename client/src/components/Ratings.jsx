import React from 'react';
import ReviewsList from './ReviewsList';

function Ratings() {

  return (
    <div>

      {/* Big Rating and star count */}
      {/* Use generateStars function from Overview */}
      <h1> 3.5 For Now </h1>

      {/* Individual product score and data */}
      <div>

        <div> XXX % of reviews recommend this product</div>

        {/* Stars breakdown */}
        <div>
          5 stars
          4 stars
          3 stars
          2 stars
          1 stars
        </div>

        {/* Size Sliding Scale */}
        <div>
          Size
        </div>

        {/* Comfort Sliding Scale */}
        <div>
          Comfort
        </div>

      </div>

      <ReviewsList />

    </div>
  );
}

export default Ratings;
