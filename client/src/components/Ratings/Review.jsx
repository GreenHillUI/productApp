import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import Stars from '../Stars';

function Review({ review }) {


  // eslint-disable-next-line no-unused-vars
  function splitLines(reviewBody) {
    const { body } = review;
    const firstLine = `${body.slice(0, 60)}...`;
    const remaining = `...${body.slice(60)}`;

    if (body.length > 60) {
      return (
        <div id="review-title">
          <div style={{ fontWeight: 'bold' }}>{firstLine}</div>
          <br />
          {remaining}
        </div>
      );
    }

    return (
      <div id="review-title" style={{ fontWeight: 'bold' }}>
        {body}
      </div>
    );
  }



  return (

    <div className="review">
      <br />
      <Stars rating={review.rating} />

      <div
        className="review-name-date"
      >
        {`${review.reviewer_name},
          ${new Date(review.date).toLocaleDateString(
          'en-us',
          { year: "numeric", month: "long", day: "numeric" }
        )}`}
      </div>

      <div>
        {splitLines(review.summary)}
      </div>

      <div style={{ bottom: 8, top: 8 }}>
        {review.body}
      </div>
      <br />

      <div id="review-recommended">
        {review.recommend
          ? (
            <div style={{
              padding: 8,

            }}
            >
              <FcCheckmark style={{ position: 'relative' }} />
              <div style={{ position: 'relative', left: 24, bottom: 18 }}>I recommend this product</div>
            </div>
          )
          : ''}
      </div>

      <div
        id="review-response"
        style={{ background: '#D3D3D3' }}
      >
        {review.response ? `Response: <br>${review.response}` : ''}
      </div>

      <br />

      <div>
        <div
          style={{ position: 'relative' }}
        >
          {`Helpful? Yes ${review.helpfulness} |`}
        </div>

        <div
          style={{ position: 'relative', left: 125, bottom: 16 }}
        >
          Report
        </div>

        <br />
      </div>

    </div>
  );
}

export default Review;
