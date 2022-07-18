import React, { useState } from 'react';
import Review from './Review';

function ReviewsList({ results }) {

  const [count, setCount] = useState(0);

  // Incomplete mapReviews for DRYness
  // accepts an array of reviews and maps them into individual reviews
  function mapReviews(reviewsArray) {
    reviewsArray.map(
      (review) => (
        <Review
          id={review.review_id}
          review={review}
        />
      )
    );
  }

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
