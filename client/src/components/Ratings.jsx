/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ReviewsList from './ReviewsList';
import Stars from './Stars';


function sortReviews(dispatch, sortMethod) {
  axios.get(`/reviews?product_id=40348&count=100&sort=${sortMethod}`)
  //         /reviews/?count=100&product_id=40348&sort=newest
    .then((response) => {
      dispatch({ type: "SETREVIEWS", reviews: response.data.results });
    })
    .catch();
}

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

// WIP to filter by rating
function filterByRating(stars) {
  console.log(`You clicked to filter ${stars} stars!`);
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
    position: 'absolute', height: 6, left: 75, width: percentageOfMax, background: 'green'
  };

  return (
    <div style={{ position: 'absolute' }}>
      <div>{`${stars} stars`}</div>

      {/* background bar */}
      <div style={{
        position: 'absolute', height: 6, left: 75, width: 200, background: '#D3D3D3',
      }}
      />

      {/* progress bar */}
      <div style={progressStyleObj} />

      <br />
    </div>
  );
}



// Main function
function Ratings({ results, setReviews, sort }) {
  return (
    <div id="ratings-reviews">

      {/* Use generateStars function from Overview */}
      <div>Ratings And Reviews</div>

      <div className="review-summary">

        <div id="big-review-num" style={{ font: 36, size: 48 }}>
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
          <div onClick={() => filterByRating(5)}>{addStarAndBar(results, 5)}</div>
          <br />
          <div onClick={() => filterByRating(4)}>{addStarAndBar(results, 4)}</div>
          <br />
          <div onClick={() => filterByRating(3)}>{addStarAndBar(results, 3)}</div>
          <br />
          <div onClick={() => filterByRating(2)}>{addStarAndBar(results, 2)}</div>
          <br />
          <div onClick={() => filterByRating(1)}>{addStarAndBar(results, 1)}</div>
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
        sort={sort}
      />

    </div>
  );
}

const RatingsContainer = connect(
  (state) => ({
    results: state.reviews,
  }),
  (dispatch) => ({
    setReviews: (reviews) => dispatch({ type: "SETREVIEWS", reviews }),
    sort: (sortMethod) => dispatch((dis) => sortReviews(dis, sortMethod)),
    // filter: (reviews) => dispatch({ type: "FILTERREVIEWS", reviews })
  })
)(Ratings);

// export {
//   getPercentageRecommended,
// averageToNearestTenth,
// };

export default RatingsContainer;
