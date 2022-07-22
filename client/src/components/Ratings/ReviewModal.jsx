/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */


import React, { useState } from 'react';
import { RiCloseLine } from "react-icons/ri";


function ReviewModal({ closeModal }) {


  return (
    <div className="review-modal-background">

      <div className="review-modal-container">



        <button onClick={() => closeModal(false)}>X</button>

        <div className="review-modal-title">
          Leave A Review!
        </div>

        <div className="review-modal-body"> STUFF </div>

        <div className="review-modal-footer">
          <button>Submit Review</button>
        </div>



      </div>

    </div>
  );

}

export default ReviewModal;
