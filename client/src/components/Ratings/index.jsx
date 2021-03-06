import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ReviewsList from './ReviewsList';
import Stars from '../Stars';
import Characteristics from './Characteristics';
import store from '../../store';

function sortReviews(dispatch, sortMethod) {
  axios.get(`/a/reviews/${store.getState().productId}?sort=${sortMethod}&count=100`)
    .then((response) => {
      dispatch({ type: "SETREVIEWS", reviews: response.data.results });
    })
    .catch();
}

function getPercentageRecommended(results) {
  const copy = results.map((result) => result.recommend);
  const trues = copy.filter(
    (resultItem) => (resultItem === true)
  );
  return Math.round((trues.length / results.length) * 100);
}

function averageToNearestTenth(ratings) {
  const total = ratings.reduce(
    (sum, item) => sum + item.rating,
    0,
  );
  if (total) {
    return Number((total / ratings.length).toFixed(1));
  }
  return "";
}

function addStarAndBar(results, stars) {
  let totalStars = 0;
  results.forEach((review) => {
    if (review.rating === stars) {
      totalStars++;
    }
  });
  const percentageOfMax = (totalStars / results.length) * 200;
  const progressStyleObj = {
    position: 'absolute',
    height: 8,
    left: 75,
    width: percentageOfMax,
    background: 'green',
    top: 4,
  };

  return (
    <div style={{ position: 'absolute' }}>
      <div style={{ float: 'left' }}>{`${stars} stars`}</div>
      <div style={{
        position: 'absolute',
        height: 8,
        left: 75,
        width: 200,
        background: '#D3D3D3',
        float: 'right',
        top: 4,
      }}
      />
      <div style={progressStyleObj} />
      <br />
    </div>
  );
}

function Ratings({
  results, resultsMeta, setReviews, sort
}) {

  return (
    <div id="ratings-reviews">
      <div>Ratings And Reviews</div>
      <div className="review-summary">
        <h2 id="big-review-num">
          <div style={{ float: 'left' }}>{averageToNearestTenth(results) ? averageToNearestTenth(results) : ""}</div>
          <div id="review-stars"><Stars rating={averageToNearestTenth(results)} /></div>
        </h2>
        <div>
          {getPercentageRecommended(results)
            ? `${getPercentageRecommended(results)}% of reviews recommend this product`
            : "Loading..."}
        </div>
        <br />
        <div>
          <div className="star-bar">{addStarAndBar(results, 5)}</div>
          <br />
          <div className="star-bar">{addStarAndBar(results, 4)}</div>
          <br />
          <div className="star-bar">{addStarAndBar(results, 3)}</div>
          <br />
          <div className="star-bar">{addStarAndBar(results, 2)}</div>
          <br />
          <div className="star-bar">{addStarAndBar(results, 1)}</div>
        </div>

        <Characteristics
          key={resultsMeta.product_id}
          resultsMeta={resultsMeta}
        />
      </div>

      <ReviewsList
        key={results.id}
        results={results}
        setReviews={setReviews}
        sort={sort}
      />

    </div>
  );
}

const RatingsContainer = connect(
  (state) => ({
    results: state.reviews,
    resultsMeta: state.reviewsMeta
  }),
  (dispatch) => ({
    setReviews: (reviews) => dispatch({ type: "SETREVIEWS", reviews }),
    sort: (sortMethod) => dispatch((dis) => sortReviews(dis, sortMethod)),
  })
)(Ratings);

export {
  getPercentageRecommended,
  averageToNearestTenth,
};

export default RatingsContainer;
