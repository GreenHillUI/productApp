import React from 'react';
import Review from './Review';

function ReviewsList() {

  // have state for how many reviews to show
  // when button is clicked, it uses counter += 2 to show 2 more

  // if there are <3 reviews, "More Reviews" button is not shown

  return (

    <>

      {/* This div houses all reviews to be shown */}
      <div>
        {/* loop through reviews? */}
        <Review />
      </div>

      <button type="button"> More Reviews </button>
      <button type="button"> Add A Review + </button>

    </>
  );
}

export default ReviewsList;
