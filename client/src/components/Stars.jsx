import React from 'react';
import { ImStarFull, ImStarEmpty } from 'react-icons/im';

function calcWidth(ratings) {
  let width = 5;
  if (Array.isArray(ratings)) {
    let total = 0;
    let weightedSum = 0;
    Object.keys(ratings).forEach((i) => {
      total += Number(ratings[i]);
      weightedSum += Number(i) * ratings[i];
    });
    width = weightedSum / total;
  } else if (typeof ratings === 'number') {
    width = ratings;
  }
  width = Math.round(width * 4) * 5; 
  console.log(width / 20);
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

export default Stars;
