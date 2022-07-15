/* eslint-disable indent */
import React from 'react';
import ReviewsList from './ReviewsList';
// Don't have to import the server/index.js?



// bring all reviews here to have data to go through

// functions needed
  // componentDidMount?

  // calculate review to the nearest half star
    // IMPORT Andrew's star function


  // calculate percentage of reviews recommend product
  // eslint-disable-next-line no-unused-vars
  function getPercentageRecommended(ratingsArray) {

  }

  // get average review value
  // eslint-disable-next-line no-unused-vars
  function getAverageReview(ratingsArray) {

    const reviewTotal = ratingsArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );

    const { length } = ratingsArray;

    return (reviewTotal / length);
  }

  // sort option event handler

  // click handler for "More Reviews"

// data needed
  // results array from product review obj
    // results length
    // rating numbers
    // recommended

// props to pass down?
  // individual review for ReviewsList


// eslint-disable-next-line no-unused-vars
function Ratings({ page, count, results }) {

  return (

    <div className="rr-container">

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
}

export default Ratings;
