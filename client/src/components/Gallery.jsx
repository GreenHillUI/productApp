import React from 'react';
import { connect } from 'react-redux';

function Gallery({
  selectedStyle, displayIndex, incrementDisplayIndex, decrementDisplayIndex
}) {
  let displaySlides = [];
  let displayThumbs = [];
  const pictureData = selectedStyle.photos;
  
  function makeSlide(image) {
    return (<img className='slide' src={image.url} alt={`${selectedStyle.name} style`} />);
  }
  
  function makeThumbnailBar(image) {
    return ((<li><img className='gallery-thumbnail' src={image.thumbnail_url} alt={`${selectedStyle.name} style`} /></li>));
  }
  
  function handleLeftArrowClick() {
    if (displayIndex !== 0) {
      decrementDisplayIndex(displayIndex--);
    }    
  }

  function handleRightArrowClick() {
    if (displayIndex !== selectedStyle.photos.length - 1) {
      incrementDisplayIndex(displayIndex++);
    }
  }
  
  if (pictureData) {
    displaySlides = pictureData.map(makeSlide);
    displayThumbs = pictureData.map(makeThumbnailBar);
  } 

  return (
    <div id='gallery'>
      <div id='slideView'>{displaySlides[displayIndex]}</div>
      <div id='carousel' className='carousel'>
        <div className='thumbView'>
          <ul>
            {displayThumbs}
          </ul>
        </div>
        <div id='buttonContainer'>
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
