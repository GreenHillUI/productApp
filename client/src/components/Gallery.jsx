/* eslint-disable no-param-reassign */
import React from 'react';
import { connect } from 'react-redux';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import { IconContext } from 'react-icons';

const arrowClass = { className: 'thumbArrow' };
const arrowStyle = { fill: 'black', height: '1.5em', width: '1.5em' };

function Gallery({
  selectedStyle,
  displayIndex,
  setDisplayIndex,
  incrementDisplayIndex,
  decrementDisplayIndex,
  setExpandedView
}) {
  let displaySlides = [];
  let displayThumbs = [];
  const pictureData = selectedStyle.photos;


  function scrollThumbnails() {
    const thumbElement = document.querySelector('.galleryThumbView li');
    thumbElement.style.marginLeft = `${thumbElement.scrollWidth * displayIndex * -1}px`;
  }

  function handleLeftArrowClick() {
    if (displayIndex !== 0) {
      decrementDisplayIndex(displayIndex--);
    }
    scrollThumbnails();
  }
  function handleRightArrowClick() {
    if (displayIndex !== selectedStyle.photos.length - 1) {
      incrementDisplayIndex(displayIndex);
    }
    scrollThumbnails();  
  }
  function handleThumbnailClick(event) {
    setDisplayIndex(parseInt(event.target.dataset.index));
    scrollThumbnails();
  }
  function handleSlideClick() {
    setExpandedView(true);
  }

  const backArrowButton = (
    <button className='arrowButton' type='button' onClick={handleLeftArrowClick}>
      <MdArrowBackIos 
        key='galleryArrowBack' 
        style={arrowStyle} 
      />
    </button>
  );

  const forwardArrowButton = (
    <button className='arrowButton' type='button' onClick={handleRightArrowClick}>
      <MdArrowForwardIos 
        key='galleryArrowForward' 
        style={arrowStyle} 
        className='thumbArrow' 
        onClick={handleRightArrowClick} 
      />
    </button>
  );
  if (pictureData) {
    displaySlides = pictureData.map((image, index) => (
      <img 
        onClick={handleSlideClick}
        key={selectedStyle.photos[index].url} 
        className='gallerySlide' 
        src={image.url} 
        alt={`${selectedStyle.name} style`} 
      />
    ));
    displayThumbs = pictureData.map((image, index) => (
      <li 
        key={selectedStyle.photos[index].thumbnail_url}
      >
        <img
          onClick={handleThumbnailClick}  
          key={selectedStyle.style_id + selectedStyle.photos.thumbnail_url} 
          data-index={index} 
          className={`galleryThumbnail${index === displayIndex ? 'Active' : ''}`}
          src={image.thumbnail_url} 
          alt={`${selectedStyle.name} style`} 
        />
      </li>
    ));
  } 
  
  return (
    <div className='gallery'>
      <div className='gallerySlideView'>
        {displaySlides[displayIndex]}  
      </div>
      <IconContext.Provider value={arrowClass}>
        <div className='galleryCarousel'>
          {displayIndex === 0
            ? null
            : backArrowButton}
          <div className='galleryThumbView'>
            <ul>
              {displayThumbs}
            </ul>
          </div>
          {displayIndex === displaySlides.length - 1 
            ? null
            : forwardArrowButton}
        </div>
      </IconContext.Provider>
    </div> 
  );
}

const GalleryContainer = connect(
  (state) => ({
    selectedStyle: state.selectedStyle,
    displayIndex: state.displayIndex,
    expandedView: state.ExpandedView
  }),

  (dispatch) => ({
    setDisplayIndex: (num) => dispatch({ type: `SETDISPLAYINDEX`, displayIndex: num }),
    incrementDisplayIndex: (num) => dispatch({ type: `INCREMENT`, displayIndex: num }),
    decrementDisplayIndex: (num) => dispatch({ type: `DECREMENT`, displayIndex: num }),
    setExpandedView: (bool) => dispatch({ type: `SETEXPANDEDVIEW`, expandedView: bool })
  })
)(Gallery);

export default GalleryContainer;
