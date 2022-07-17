import React from 'react';

function Review({ review }) {

  return (


    <div className="rr-review-box">

      <br />

      <div> Stars </div>
      {`${review.rating} stars`}

      <div> Username - Date </div>
      {`${review.reviewer_name}, ${review.date}`}


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
