/**
 * @jest-environment jsdom
 */

/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { VscTriangleDown } from 'react-icons/vsc';
import ReviewsList from './ReviewsList';
import Stars from '../Stars';
import Characteristics from './Characteristics';
import store from '../../store';


function sortReviews(dispatch, sortMethod) {
  axios.get(`/a/reviews/${store.getState().productId}?sort=${sortMethod}`)
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
  return (trues.length / results.length) * 100;
}

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

      {/* background bar */}
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

      {/* progress bar */}
      <div style={progressStyleObj} />

      <br />
    </div>
  );
}






// // INCOMPLETE CHARACTERISTICS - MOVED
// function characteristicsBars(data) {


//   function getArrowPosition(value) {
//     return (value / 5) * 264;
//   }

//   if (data.Size) {


//     return [

//       <div
//         className="characteristics"
//         style={{ padding: 10, top: 40 }}
//       >
//         <div style={{ bottom: 10 }}>Fit</div>

//         <div style={{
//           position: 'flex',
//           height: 8,
//           left: 100,
//           width: 264,
//           background: '#D3D3D3',
//           bottom: 30,
//         }}
//         />

//         <div>
//           <VscTriangleDown style={{ position: 'relative', left: getArrowPosition(data.Size.value) }} />
//         </div>

//         <div>
//           <div style={{ display: 'inline', float: 'left' }}>Runs Tight</div>
//           <div style={{ display: 'inline', float: 'right' }}>Runs Loose</div>
//         </div>


//       </div>,



//       // <div className="characteristics">{`${data.Width.value} Width`}</div>,

//       // <div className="characteristics">{`${data.Comfort.value} Comfort`}</div>,

//       // <div className="characteristics">{`${data.Quality.value} Quality`}</div>,

//     ];
//   }

//   return (<div> LOADING CHARS</div>);
// }







// Main function
function Ratings({ results, resultsMeta, setReviews, sort }) {

  // console.log("resultsMeta ", resultsMeta);
  return (
    <div id="ratings-reviews">

      {/* Use generateStars function from Overview */}
      <div>Ratings And Reviews</div>

      <div className="review-summary">

        <h2 id="big-review-num">
          <div style={{ float: 'left' }}>{averageToNearestTenth(results) ? averageToNearestTenth(results) : "Loading..."}</div>
          <div id="review-stars"><Stars rating={averageToNearestTenth(results)} /></div>
        </h2>

        <div>
          {getPercentageRecommended(results)
            ? `${getPercentageRecommended(results)}% of reviews recommend this product`
            : "Loading..."}
        </div>

        <br />

        <div>
          <div onClick={() => filterByRating(5)} style={{ padding: 10 }}>{addStarAndBar(results, 5)}</div>
          <br />
          <div onClick={() => filterByRating(4)} style={{ padding: 10 }}>{addStarAndBar(results, 4)}</div>
          <br />
          <div onClick={() => filterByRating(3)} style={{ padding: 10 }}>{addStarAndBar(results, 3)}</div>
          <br />
          <div onClick={() => filterByRating(2)} style={{ padding: 10 }}>{addStarAndBar(results, 2)}</div>
          <br />
          <div onClick={() => filterByRating(1)} style={{ padding: 10 }}>{addStarAndBar(results, 1)}</div>
        </div>

        <Characteristics
          resultsMeta={resultsMeta}
        />

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
    resultsMeta: state.reviewsMeta
  }),
  (dispatch) => ({
    setReviews: (reviews) => dispatch({ type: "SETREVIEWS", reviews }),
    sort: (sortMethod) => dispatch((dis) => sortReviews(dis, sortMethod)),
    // filter: (reviews) => dispatch({ type: "FILTERREVIEWS", reviews })
  })
)(Ratings);

export {
  getPercentageRecommended,
  averageToNearestTenth,
};

export default RatingsContainer;
