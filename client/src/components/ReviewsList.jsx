import React, { useState } from 'react';
import Review from './Review';

function ReviewsList({ results, sort }) {

  const [count, setCount] = useState(0);

  function handleOptionChange(event) {
    console.log(event.target.value);
    sort(event.target.value);
  }

  return (
    <div className="reviews-list">
      {/* This div houses all reviews to be shown */}
      <div>
        <div>{`${results.length} reviews, sorted by`}</div>

        <select
          style={{
            position: 'relative',
            left: 136,
            bottom: 18,
            background: 'transparent',
            border: 'none',
          }}
          onChange={handleOptionChange}
        >
          <option value="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>

      </div>
      <div>
        {/* loop through reviews? */}
        {!count
          ? results.slice(0, 2).map((review) => (
            <Review
              key={review.review_id}
              id={review.review_id}
              review={review}
            />
          ))
          : results.map((review) => (
            <Review
              key={review.review_id}
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
