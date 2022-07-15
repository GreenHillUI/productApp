import React from 'react';
import Reviews from './Reviews';

function Ratings() {

  return (
    <div>

      <div>
        {/* Individual product score and data */}
        {/* Use reviewAverage and generateStars functions from Overview */}
        <div> XXX % of reviews recommend this product</div>

        {/* Stars breakdown */}
        <div>
          5 stars
          4 stars
          3 stars
          2 stars
          1 star
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


      <Reviews />

    </div>
  );
}

export default Ratings;
