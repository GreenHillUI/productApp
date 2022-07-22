/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */


import React, { useState } from 'react';
import { RiCloseLine } from "react-icons/ri";

function handleOptionClick(value) {
  console.log("CLICKED ", value);
}

function ReviewModal({ closeModal }) {


  return (
    <div className="review-modal-background">

      <div className="review-modal-container">

        <button onClick={() => closeModal(false)}>X</button>

        <div className="review-modal-title">
          Write Your Review!
        </div>

        <div className="review-modal-body"> Overall Rating </div>

        <div className="review-modal-body"> STAR RATING </div>

        <div className="review-modal-body"> Would you recommend this product? </div>

        <div className="review-modal-selector-container">
          <div className="review-modal-body"> Size </div>
          <input TYPE="Radio" Name="Size" Value={1} onChange={() => handleOptionClick(1)} />
          <input TYPE="Radio" Name="Size" Value={2} onChange={() => handleOptionClick(2)} />
          <input TYPE="Radio" Name="Size" Value={3} onChange={() => handleOptionClick(3)} />
          <input TYPE="Radio" Name="Size" Value={4} onChange={() => handleOptionClick(4)} />
          <input TYPE="Radio" Name="Size" Value={5} onChange={() => handleOptionClick(5)} />
          <div>
            <div className="review-desc-left">
              A size too small
            </div>
            <div className="review-desc-right">
              A size too wide
            </div>
          </div>
        </div>

        <div className="review-modal-selector-container">
          <div className="review-modal-body"> Width </div>
          <input TYPE="Radio" Name="Width" Value={1} onChange={() => handleOptionClick(1)} />
          <input TYPE="Radio" Name="Width" Value={2} onChange={() => handleOptionClick(2)} />
          <input TYPE="Radio" Name="Width" Value={3} onChange={() => handleOptionClick(3)} />
          <input TYPE="Radio" Name="Width" Value={4} onChange={() => handleOptionClick(4)} />
          <input TYPE="Radio" Name="Width" Value={5} onChange={() => handleOptionClick(5)} />
          <div>
            <div className="review-desc-left">
              A size too small
            </div>
            <div className="review-desc-right">
              A size too big
            </div>
          </div>
        </div>

        <div className="review-modal-selector-container">
          <div className="review-modal-body"> Comfort </div>
          <input TYPE="Radio" Name="Comfort" Value={1} onChange={() => handleOptionClick(1)} />
          <input TYPE="Radio" Name="Comfort" Value={2} onChange={() => handleOptionClick(2)} />
          <input TYPE="Radio" Name="Comfort" Value={3} onChange={() => handleOptionClick(3)} />
          <input TYPE="Radio" Name="Comfort" Value={4} onChange={() => handleOptionClick(4)} />
          <input TYPE="Radio" Name="Comfort" Value={5} onChange={() => handleOptionClick(5)} />
          <div>
            <div className="review-desc-left">
              Uncomfortable
            </div>
            <div className="review-desc-right">
              Perfect
            </div>
          </div>
        </div>

        <div className="review-modal-selector-container">
          <div className="review-modal-body"> Quality </div>
          <input TYPE="Radio" Name="Quality" Value={1} onChange={() => handleOptionClick(1)} />
          <input TYPE="Radio" Name="Quality" Value={2} onChange={() => handleOptionClick(2)} />
          <input TYPE="Radio" Name="Quality" Value={3} onChange={() => handleOptionClick(3)} />
          <input TYPE="Radio" Name="Quality" Value={4} onChange={() => handleOptionClick(4)} />
          <input TYPE="Radio" Name="Quality" Value={5} onChange={() => handleOptionClick(5)} />
          <div>
            <div className="review-desc-left">
              Poor
            </div>
            <div className="review-desc-right">
              Premium
            </div>
          </div>
        </div>

        <div className="review-modal-footer">
          <button className="review-button">Submit Review</button>
        </div>

      </div>

    </div>
  );

}

export default ReviewModal;
