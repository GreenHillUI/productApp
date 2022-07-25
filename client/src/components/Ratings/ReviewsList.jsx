import React, { useState } from 'react';
import Review from './Review';
import ReviewModal from './ReviewModal';

function ReviewsList({ results, sort }) {
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  function handleOptionChange(event) {
    sort(event.target.value);
  }

  return (
    <div className="reviews-list">
      <div>
        <div>{`${results.length} reviews, sorted by`}</div>
        <select
          id="sort-dd"
          onChange={handleOptionChange}
        >
          <option value="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </div>
      <div>
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
      {(!count ? (
        <button
          className='review-button'
          type="button"
          onClick={() => setCount(count + 1)}
        >
          Show More
        </button>
      ) : '')}
      <button
        className='review-button'
        type="button"
        onClick={() => { setOpenModal(true); }}
      >
        Add A Review +
      </button>
      {openModal && <ReviewModal closeModal={setOpenModal} />}
    </div>
  );
}

export default ReviewsList;
