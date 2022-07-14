import React from 'react';
import { connect } from 'react-redux';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

//Takes an array of images and makes them carousel slides


function Carousel({
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

  if (pictureData) {
    displaySlides = pictureData.map(makeSlide);
    displayThumbs = pictureData.map(makeThumbnailBar);
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

  return (
    <div id='gallery'>
      <div id='slideView'>{displaySlides[displayIndex]}</div>
      <div id='carousel' className='carousel'>
        <div className='thumbView'>
          <ul>
            {displayThumbs}
          </ul>
        </div>
        <button className="Arrow" onClick={handleLeftArrowClick} >PREV</button>
        <button className="Arrow" onClick={handleRightArrowClick}>NEXT</button>
      </div>
    </div>
  );
}

const CarouselContainer = connect(
  (state) => ({
    selectedStyle: state.selectedStyle,
    displayIndex: state.displayIndex
  }),

  (dispatch) => ({
    setDisplayIndex: (num) => dispatch({ type: `SETDISPLAYINDEX`, displayIndex: num }),
    incrementDisplayIndex: (num) => dispatch({ type: `INCREMENT`, displayIndex: num }),
    decrementDisplayIndex: (num) => dispatch({ type: `DECREMENT`, displayIndex: num })
  })
)(Carousel);

export default CarouselContainer;
