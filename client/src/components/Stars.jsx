import React from 'react';
import { ImStarFull, ImStarEmpty } from 'react-icons/im';

function reviewAverage(ratings) {
  let total = 0;
  let weightedSum = 0;
  Object.keys(ratings).forEach((i) => {
    total += Number(ratings[i]);
    weightedSum += Number(i) * ratings[i];
  });
  return weightedSum / total;
}

function calcWidth(ratings) {
  let width = 5;
  if (Array.isArray(ratings)) {
    // get weighted average from many reviews
    width = reviewAverage(ratings);
  } else if (typeof ratings === 'number') {
    width = ratings;
  }
  // converts star rating to a percentage, needed for css styling
  width = Math.round(width * 4) * 5; 

  return { width: `${width}%` };
}

function Stars({ rating }) {
  return (
    <div className='stars'>
      <div className='empty-stars'>
        <ImStarEmpty />
        <ImStarEmpty />
        <ImStarEmpty />
        <ImStarEmpty />
        <ImStarEmpty />
      </div>
      <div className='star-rating' style={calcWidth(rating)}>
        <ImStarFull />
        <ImStarFull />
        <ImStarFull />
        <ImStarFull />
        <ImStarFull />
      </div>
    </div>
  );
}

export { reviewAverage };
export default Stars;
