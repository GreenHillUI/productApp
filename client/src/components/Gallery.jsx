import React from 'react';
import { connect } from 'react-redux';


function Gallery({
  selectedStyle, displayIndex, setDisplayIndex, incrementDisplayIndex, decrementDisplayIndex
}) {
  let displaySlides = [];
  let displayThumbs = [];
  const pictureData = selectedStyle.photos;
  
  function scrollThumbnails() {
    const thumbElement = document.querySelector('.galleryThumbView li');
    thumbElement.style.marginLeft = thumbElement.scrollWidth * displayIndex * -1 + 'px';
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
    setDisplayIndex(event.target.dataset.index)
  }
  if (pictureData) {
    displaySlides = pictureData.map((image) => (<img className='gallerySlide' src={image.url} alt={`${selectedStyle.name} style`} />));
    displayThumbs = pictureData.map((image, index) => (<li><img onClick={handleThumbnailClick} data-index={index} className='galleryThumbnail' src={image.thumbnail_url} alt={`${selectedStyle.name} style`} /></li>));
  } 

  return (
    <div id='gallery'>
      <div id='gallerySlideView'>
        {displaySlides[displayIndex]}  
      </div>
      <div id='galleryCarousel' className='galleryCarousel'>
        <div className='galleryThumbView'>
          <ul>
            {displayThumbs}
          </ul>
        </div>
        <div id='galleryButtonContainer'>
          <button type='button' className='thumbArrow' onClick={handleLeftArrowClick}>PREV</button>
          <button type='button' className='thumbArrow' onClick={handleRightArrowClick}>NEXT</button>
        </div>
      </div>
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
