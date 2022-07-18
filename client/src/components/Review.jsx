import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import Stars from './Stars';

function Review({ review }) {

  return (

    <div className="review">
      <br />

      <Stars rating={review.rating} />

      <div className="review-name-date">
        {`${review.reviewer_name},
          ${new Date(review.date).toLocaleDateString(
          'en-us',
          { year: "numeric", month: "long", day: "numeric" }
        )}`}
      </div>

      <br />
      {review.summary}
      <br />
      {review.body}

      <div id="review-recommended">
        {review.recommend
          ? (
            <>
              <FcCheckmark style={{ position: 'absolute' }} />
              <div>I recommend this product</div>
            </>
          )
          : ''}
      </div>

      <div id="review-response">
        {review.response ? `Response: <br>${review.response}` : ''}
      </div>

      {`Helpful? Yes ${review.helpfulness} | `}

      <div> Report </div>

    </div>
  );
}

export default Review;
