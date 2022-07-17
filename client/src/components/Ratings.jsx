<<<<<<< HEAD
=======
/* eslint-disable indent */

>>>>>>> cjratings2
import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import ReviewsList from './ReviewsList';

<<<<<<< HEAD
=======
// calculate percentage of reviews recommend product
>>>>>>> cjratings2
function getPercentageRecommended(results) {
  const copy = results.map((result) => result.recommend);
  const trues = copy.filter(
    (resultItem) => (resultItem === true)
  );
  return Math.ceil(trues.length / results.length) * 100;
}
<<<<<<< HEAD

=======


// get average value from array of integers rounded to the nearest tenth
>>>>>>> cjratings2
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
<<<<<<< HEAD
  const whole = Math.floor(number);
  const decimal = Math.trunc(((number % 1) * 10)) / 10;
  return whole + decimal;
}

function Ratings({ results, setReviews }) {
=======
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
>>>>>>> cjratings2
  return (
    <div id="ratings-reviews-container">

      <div>Ratings And Reviews</div>
<<<<<<< HEAD
=======
      {/* Use generateStars function from Overview */}
      <h1 className="big-review-num">
        {averageToNearestTenth(results) ? averageToNearestTenth(results) : "Loading..."}
      </h1>

>>>>>>> cjratings2

      <h1 className="big-review-num">
        {averageToNearestTenth(results) ? averageToNearestTenth(results) : "Loading..."}
      </h1>

<<<<<<< HEAD
      <div>
=======

>>>>>>> cjratings2
        <div>
          {getPercentageRecommended(results)
            ? `${getPercentageRecommended(results)}% of reviews recommend this product`
            : "Loading..."}
        </div>

        <div>
          <div>5 stars</div>
          <div>4 stars</div>
          <div>3 stars</div>
          <div>2 stars</div>
          <div>1 stars</div>
        </div>

        <div>
          Size
        </div>

        <div>
          Comfort
        </div>

      </div>

      <ReviewsList
        id={results.id}
        results={results}
        setReviews={setReviews}
      />
<<<<<<< HEAD
=======

>>>>>>> cjratings2
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
