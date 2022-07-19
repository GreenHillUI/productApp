/* eslint-disable indent */

import React from 'react';
import { connect } from 'react-redux';
import ReviewsList from './ReviewsList';
import Stars from './Stars';

// accepts an array of review objects, extracts .recommend, and returns an integer
function getPercentageRecommended(results) {
  const copy = results.map((result) => result.recommend);
  const trues = copy.filter(
    (resultItem) => (resultItem === true)
  );
  return Math.ceil(trues.length / results.length) * 100;
}

// accepts an array of review objects, extracts .rating, and returns the average rounded
function averageToNearestTenth(ratings) {
  const total = ratings.reduce(
    (sum, item) => sum + item.rating,
    0,
  );
  return (total / ratings.length).toFixed(1);
}

// accepts results and which star rating to analyze. outputs xml and styling for progress bar
function addStarAndBar(results, stars) {
  let totalStars = 0;

  results.forEach((review) => {
    if (review.rating === stars) {
      totalStars++;
    }
  });

  const percentageOfMax = (totalStars / results.length) * 200;

  // object for adjusting how much of bar is filled based on reviews for each star
  const progressStyleObj = {
    position: 'absolute', height: 5, left: 75, width: percentageOfMax, background: 'green'
  };

  return (
    <div>
      <div style={{ position: 'absolute' }}>{`${stars} stars`}</div>

      {/* background bar */}
      <div style={{
        position: 'absolute', height: 5, left: 75, width: 200, background: 'gray'
      }}
      />

      {/* progress bar */}
      <div style={progressStyleObj} />

      {/* add totalStars num to end of div */}
      {/* <div
        style={{
        position: 'relative', height: 5, right: 25, width: 225
      }}
      >
        {`${totalStars}`}
      </div> */}

      <br />
    </div>
  );
}

// Main function
function Ratings({ results, setReviews }) {
  return (
    <div id="ratings-reviews">

      {/* Use generateStars function from Overview */}
      <div>Ratings And Reviews</div>

      <div className="review-summary">

        <div id="big-review-num">
          {averageToNearestTenth(results) ? averageToNearestTenth(results) : "Loading..."}
          <Stars rating={averageToNearestTenth(results)} />
        </div>

        <div>
          {getPercentageRecommended(results)
            ? `${getPercentageRecommended(results)}% of reviews recommend this product`
            : "Loading..."}
        </div>

        <br />

        <div>
          {addStarAndBar(results, 5)}
          <br />
          {addStarAndBar(results, 4)}
          <br />
          {addStarAndBar(results, 3)}
          <br />
          {addStarAndBar(results, 2)}
          <br />
          {addStarAndBar(results, 1)}
        </div>

        <div>
          <br />
          Size
        </div>

        <div>
          <br />
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
