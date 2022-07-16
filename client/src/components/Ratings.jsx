/* eslint-disable no-unused-vars */
/* eslint-disable indent */

import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import ReviewsList from './ReviewsList';

// calculate percentage of reviews recommend product
function getPercentageRecommended(results) {
  const copy = results.map((result) => result.recommend);
  const trues = copy.filter(
    (resultItem) => (resultItem === true)
      );
  return Math.ceil(trues.length / results.length) * 100;
}


  // get average value from array of integers rounded to the nearest tenth
  function averageToNearestTenth(array) {

    const reviewVals = array.map(
    (value) => value.rating
    );

    const reviewTotal = _.reduce(
      reviewVals,
      (previousValue, currentValue) => previousValue + currentValue,
      0,
    );
    const number = (reviewTotal / array.length);
    const whole = Math.floor(number); // gets integer
    const decimal = Math.trunc(((number % 1) * 10)) / 10; // gets tenths
    return whole + decimal; // returns number rounded to tenths
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
  // reviews for ReviewsList


function Ratings({ results, setReviews }) {
// console.log("RESULTS, ", results);
  return (
    <div id="ratings-reviews-container">

      <div>Ratings And Reviews</div>
      {/* Use generateStars function from Overview */}
      <h1 className="big-review-num">
        {averageToNearestTenth(results) ? averageToNearestTenth(results) : "Loading..."}
      </h1>


      {/* Individual product score and data */}
      <div>


        <div>
          {getPercentageRecommended(results)
          ? `${getPercentageRecommended(results)}% of reviews recommend this product`
          : "Loading..."}
        </div>

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

      <ReviewsList
        id={results.id}
        results={results}
        setReviews={setReviews}
      />

    </div>
  );
}

const RatingsContainer = connect(
  (state) => ({
    results: state.reviews,
  }),
  (dispatch) => ({
    setReviews: (reviews) => dispatch({ type: "SETREVIEWS", reviews })
  })
)(Ratings);

export default RatingsContainer;
