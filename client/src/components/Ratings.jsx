import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import ReviewsList from './ReviewsList';
import Stars from './Stars';

function getPercentageRecommended(results) {
  const copy = results.map((result) => result.recommend);
  const trues = copy.filter(
    (resultItem) => (resultItem === true)
  );
  return Math.ceil(trues.length / results.length) * 100;
}

function averageToNearestTenth(ratings) {
  const total = ratings.reduce(
    (sum, item) => sum + item.rating,
    0,
  );
  return (total / ratings.length).toFixed(1);
}

function Ratings({ results, setReviews }) {
  return (
    <div id="ratings-reviews">

      {/* Use generateStars function from Overview */}
      <div>Ratings And Reviews</div>

      <div className="review-summary">

        <h1 id="big-review-num">
          {averageToNearestTenth(results) ? averageToNearestTenth(results) : "Loading..."}
          <Stars rating={averageToNearestTenth(results)} />
        </h1>

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

      <div className="reviews-list">
        <ReviewsList
          id={results.id}
          results={results}
          setReviews={setReviews}
        />
      </div>

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
