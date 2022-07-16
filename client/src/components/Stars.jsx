import React from 'react';
import { ImStarFull, ImStarEmpty } from 'react-icons/im';


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
      <div className='star-rating'>
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
