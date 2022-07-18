import React, { useState, useEffect } from 'react';
import Review from './Review';

function ReviewsList({ results }) {

  // have state hook for how many reviews to show
  // when button is clicked, it uses counter += 2 to show 2 more

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  });



  return (
    <div className="reviews-list">
      {/* This div houses all reviews to be shown */}
      <div>
        {`${results.length} reviews, sorted by...`}
      </div>
      <div>
        {/* loop through reviews? */}
        {!count
          ? results.slice(0, 2).map((review) => (
            <Review
              id={review.review_id}
              review={review}
            />
          ))
          : results.map((review) => (
            <Review
              id={review.review_id}
              review={review}
            />
          ))}
      </div>

      {/* Buttons to show more or add reviews */}
      {(!count ? (
        <button
          className='review-button'
          type="button"
          onClick={() => setCount(count + 1)}
        >
          Show More
        </button>
      ) : '')}

      <button className='review-button' type="button"> Add A Review + </button>

    </div>
  );
}

export default ReviewsList;
