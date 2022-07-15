/* eslint-disable no-unused-vars */
/* eslint-disable indent */

import React from 'react';
import ReviewsList from './ReviewsList';
// Don't have to import the server/index.js?



// bring all reviews here to have data to go through

// functions needed
  // componentDidMount? Or alternative?

  // calculate review to the nearest half star
    // IMPORT Andrew's star function


// calculate percentage of reviews recommend product
// function getPercentageRecommended(results) {
  // create new array of only 'true' values from results
  // const trues = results.filter(
  //   (resultItem.recommend) => (resultItem.recommend === true)
  //     );

  // return the Length of array of trues divided by original array length
  // return Math.ceil(trues.length / ratingsArray.length) * 100;
// }


  // get average review value
function getAverageReview(results) {
  const reviewTotal = results.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  const { length } = results;
  return (reviewTotal / length);
}

  // sort option event handler

  // click handler for "More Reviews"

// data needed
  // results array from product review obj
    // results length
    // rating numbers
    // recommended
    // username
    // date

// props to pass down?
  // individual review for ReviewsList


function Ratings({ page, count, results }) {

  return (
    <div id="ratings-reviews-container">

      {/* Big Rating and star count */}
      {/* Use generateStars function from Overview */}
      <h1 className="big-num"> 3.5 HardCode </h1>

      {/* Individual product score and data */}
      <div>

        <div> XXX % of reviews recommend this product</div>

        {/* Stars breakdown */}
        <div>
          <div>5 stars</div>
          <div>4 stars</div>
          <div>3 stars</div>
          <div>2 stars</div>
          <div>1 stars</div>
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
};

export default Ratings;
