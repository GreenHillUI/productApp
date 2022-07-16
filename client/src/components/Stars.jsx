import React from 'react';
import { IoStarOutline, IoStarSharp } from 'react-icons/io5';

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
  if (typeof ratings === 'object') {
    // get weighted average from many reviews
    width = reviewAverage(ratings);
  } else if (typeof ratings === 'number') {
    width = ratings;
  }

  // stars are rendered by hiding a % of 5 stars, so is
  // neccessary to convert star rating to a percentage
  width = Math.round(width * 4) * 5;
  if (width % 20 < 10) {
    width += 3;
  } else if (width % 20 > 10) {
    width -= 3;
  }

  return { width: `${width}%` };
}

function Stars({ rating }) {
  return (
    <div className='stars'>
      <div className='empty-stars'>
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
      </div>
      <div className='star-rating' style={calcWidth(rating)}>
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
      </div>
    </div>
  );
}

export { reviewAverage };
export default Stars;
