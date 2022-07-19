import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import Stars from './Stars';

function Review({ review }) {


  function splitLines(reviewBody) {
    const { body } = review;
    const firstLine = `${body.slice(0, 60)}...`;
    const remaining = `...${body.slice(60)}`;

    if (body.length > 60) {
      return (
        <div>
          <div style={{ 'font-weight': 'bold' }}>{firstLine}</div>
          <br />
          {remaining}
        </div>
      );
    }

    return (
      <div style={{ 'font-weight': 'bold' }}>
        {body}
      </div>
    );
  }


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
      {splitLines(review.body)}
      <br />
      <div id="review-recommended">
        {review.recommend
          ? (
            <div style={{
              padding: 14,
              background: '#D3D3D3',
            }}
            >
              <br />
              <FcCheckmark style={{ position: 'relative' }} />
              <div style={{ position: 'relative', left: 20, bottom: 18 }}>I recommend this product</div>
            </div>
          )
          : ''}
      </div>

      <div id="review-response">
        {review.response ? `Response: <br>${review.response}` : ''}
      </div>

      <br />
      {`Helpful? Yes ${review.helpfulness} | `}

      <div> Report </div>

    </div>
  );
}

export default Review;
