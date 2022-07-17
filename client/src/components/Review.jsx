import React from 'react';
import Stars from './Stars';

function Review({ review }) {

  return (

    <div className="review">

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


      <div> Recommended (w/Checkmark) </div>
      <div id="review-recommended">
        {review.recommend ? 'I recommend this product' : ''}
      </div>


      <div> Response </div>
      <div id="review-response">
        {review.response ? `${review.response}` : ''}
      </div>

      {`Helpful? Yes ${review.helpfulness}`}

      <div> Report </div>

    </div>
  );
}

export default Review;
