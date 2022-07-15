import React from 'react';
import Review from './Review';

function ReviewsList() {

  // have state hook for how many reviews to show
  // when button is clicked, it uses counter += 2 to show 2 more

  // if there are <3 reviews remaining, "More Reviews" button is not shown

  return (

    <>

      {/* This div houses all reviews to be shown */}
      <div>
        {/* loop through reviews? */}
        <Review />
      </div>

      {/* Buttons to show more or add reviews */}
      <button type="button"> More Reviews </button>
      <button type="button"> Add A Review + </button>

    </>
  );
}

export default ReviewsList;
