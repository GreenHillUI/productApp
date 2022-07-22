/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { RiCloseLine } from "react-icons/ri";
import Stars from '../Stars';

function handleOptionClick(value) {
  console.log("CLICKED ", value);
}

function ReviewModal({ closeModal }) {

  return (
    <div className="review-modal-background">

      <div className="review-modal-container">
        <RiCloseLine onClick={() => closeModal(false)} />

        <div className="review-modal-title">
          Write Your Review!
        </div>

        <div className="review-modal-body"> Overall Rating </div>
        <div className="review-modal-body">
          <Stars rating={0} />
        </div>

        <div className="review-modal-selector-container">
          <div className="review-modal-body"> Size </div>
          <div className="char-button">
            <input TYPE="Radio" Name="Size" Value={2} onChange={() => handleOptionClick(2)} />
            <input TYPE="Radio" Name="Size" Value={1} onChange={() => handleOptionClick(1)} />
            <input TYPE="Radio" Name="Size" Value={3} onChange={() => handleOptionClick(3)} />
            <input TYPE="Radio" Name="Size" Value={4} onChange={() => handleOptionClick(4)} />
            <input TYPE="Radio" Name="Size" Value={5} onChange={() => handleOptionClick(5)} />
          </div>
          <div className="modal-chars">
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
          <div className="char-button">
            <input TYPE="Radio" Name="Width" Value={2} onChange={() => handleOptionClick(2)} />
            <input TYPE="Radio" Name="Width" Value={1} onChange={() => handleOptionClick(1)} />
            <input TYPE="Radio" Name="Width" Value={3} onChange={() => handleOptionClick(3)} />
            <input TYPE="Radio" Name="Width" Value={4} onChange={() => handleOptionClick(4)} />
            <input TYPE="Radio" Name="Width" Value={5} onChange={() => handleOptionClick(5)} />
          </div>
          <div className="modal-chars">
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
          <div className="char-button">
            <input TYPE="Radio" Name="Comfort" Value={1} onChange={() => handleOptionClick(1)} />
            <input TYPE="Radio" Name="Comfort" Value={2} onChange={() => handleOptionClick(2)} />
            <input TYPE="Radio" Name="Comfort" Value={3} onChange={() => handleOptionClick(3)} />
            <input TYPE="Radio" Name="Comfort" Value={4} onChange={() => handleOptionClick(4)} />
            <input TYPE="Radio" Name="Comfort" Value={5} onChange={() => handleOptionClick(5)} />
          </div>
          <div className="modal-chars">
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
          <div className="char-button">
            <input TYPE="Radio" Name="Quality" Value={1} onChange={() => handleOptionClick(1)} />
            <input TYPE="Radio" Name="Quality" Value={2} onChange={() => handleOptionClick(2)} />
            <input TYPE="Radio" Name="Quality" Value={3} onChange={() => handleOptionClick(3)} />
            <input TYPE="Radio" Name="Quality" Value={4} onChange={() => handleOptionClick(4)} />
            <input TYPE="Radio" Name="Quality" Value={5} onChange={() => handleOptionClick(5)} />
          </div>
          <div className="modal-chars">
            <div className="review-desc-left">
              Poor
            </div>
            <div className="review-desc-right">
              Premium
            </div>
          </div>
        </div>

        <div className="review-modal-selector-container">
          <div> Review Summary </div>
          <input placeholder="  I really loved this product!" style={{ width: '100%', border: '1px solid black' }} />
        </div>

        <div className="review-modal-selector-container">
          <div> Why did you like this product or not? </div>
          <input placeholder="  I really loved this product!" style={{ width: '100%', height: "20px", border: '1px solid black' }} />
        </div>

        <div className="review-modal-selector-container">
          <div> Your nickname *</div>
          <input placeholder="  I really loved this product!" style={{ width: '100%', border: '1px solid black' }} />
        </div>

        <div className="review-modal-selector-container">
          <div> Your email *</div>
          <input placeholder="  I really loved this product!" style={{ width: '100%', border: '1px solid black' }} />
        </div>

        <div className="review-modal-footer">
          <button className="review-button" onClick={() => closeModal(false)}>Submit Review</button>
        </div>

      </div>

    </div>
  );

}

export default ReviewModal;
