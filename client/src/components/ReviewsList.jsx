import React from 'react';
import Review from './Review';

function ReviewsList({ results }) {

  // have state hook for how many reviews to show
  // when button is clicked, it uses counter += 2 to show 2 more

  // if there are <3 reviews remaining, "More Reviews" button is not shown

  return (
    <div>
      {/* This div houses all reviews to be shown */}
      <div>
        {`${results.length} reviews, sorted by...`}
      </div>
      <div>
        {/* loop through reviews? */}
        {results.map((review) => (
          <Review
            id={review.review_id}
            review={review}
          />
        ))}
      </div>

      {/* Buttons to show more or add reviews */}
      <button className='review-button' type="button"> More Reviews </button>
      <button className='review-button' type="button"> Add A Review + </button>
    </div>
  );
}

export default ReviewsList;
