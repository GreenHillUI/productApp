import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import ReviewsList from './ReviewsList';

function getPercentageRecommended(results) {
  const copy = results.map((result) => result.recommend);
  const trues = copy.filter(
    (resultItem) => (resultItem === true)
  );
  return Math.ceil(trues.length / results.length) * 100;
}

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
  const whole = Math.floor(number);
  const decimal = Math.trunc(((number % 1) * 10)) / 10;
  return whole + decimal;
}

function Ratings({ results, setReviews }) {
  return (
    <div id="ratings-reviews-container">

      <div>Ratings And Reviews</div>

      <h1 className="big-review-num">
        {averageToNearestTenth(results) ? averageToNearestTenth(results) : "Loading..."}
      </h1>

      <div>
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
