/* eslint-disable no-param-reassign */
import React from 'react';
import { connect } from 'react-redux';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import { IconContext } from 'react-icons';

const arrowClass = { className: 'thumbArrow' };
const arrowStyle = { fill: 'green', height: '1.5em', width: '1.5em' };

function Gallery({
  selectedStyle, displayIndex, setDisplayIndex, incrementDisplayIndex, decrementDisplayIndex
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
      incrementDisplayIndex(displayIndex++);
    }
    scrollThumbnails();  
  }
  function handleThumbnailClick(event) {
    setDisplayIndex(parseInt(event.target.dataset.index));
    scrollThumbnails();
  }
  if (pictureData) {
    displaySlides = pictureData.map((image, index) => (
      <img 
        key={selectedStyle.photos[index].url} 
        className='gallerySlide' 
        src={image.url} 
        alt={`${selectedStyle.name} style`} 
      />
    ));
    displayThumbs = pictureData.map((image, index) => (
 
      <li 
        onClick={handleThumbnailClick} 
        key={selectedStyle.photos[index].thumbnail_url}
      >
        <img 
          key={selectedStyle.style_id + selectedStyle.photos.thumbnail_url} 
          data-index={index} 
          className='galleryThumbnail' 
          src={image.thumbnail_url} 
          alt={`${selectedStyle.name} style`} 
        />
      </li>
    ));
  } 
  
  return (
    <div id='gallery'>
      <div id='gallerySlideView'>
        {displaySlides[displayIndex]}  
      </div>
      <IconContext.Provider value={arrowClass}>
        <div id='galleryCarousel' className='galleryCarousel'>
          {displayIndex === 0
            ? null
            : (
              <MdArrowBackIos 
                key='galleryArrowBack' 
                style={arrowStyle} 
                onClick={handleLeftArrowClick}
              />
            )} 
          <div className='galleryThumbView'>
            <ul>
              {displayThumbs}
            </ul>
          </div>
          {displayIndex === displaySlides.length - 1 
            ? null
            : (
              <MdArrowForwardIos 
                key='galleryArrowForward' 
                style={arrowStyle} 
                className='thumbArrow' 
                onClick={handleRightArrowClick} 
              />
            )}
        </div>
      </IconContext.Provider>
      
    </div>
    
  );
}

const GalleryContainer = connect(
  (state) => ({
    selectedStyle: state.selectedStyle,
    displayIndex: state.displayIndex
  }),

  (dispatch) => ({
    setDisplayIndex: (num) => dispatch({ type: `SETDISPLAYINDEX`, displayIndex: num }),
    incrementDisplayIndex: (num) => dispatch({ type: `INCREMENT`, displayIndex: num }),
    decrementDisplayIndex: (num) => dispatch({ type: `DECREMENT`, displayIndex: num })
  })
)(Gallery);

export default GalleryContainer;
