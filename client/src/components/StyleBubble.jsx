import React from 'react';
import { connect } from 'react-redux';


function StyleBubble({ style, setSelectedStyle }) {
  
  function handleClick() {
    setSelectedStyle([style]); 
  }


  if (style) {
    return ( 
      <div className="style-bubble">
        <div>{style.name}</div>
        <img className="style-thumbnail" src={style.photos[0].thumbnail_url} onClick={handleClick} alt={`A thumbnail of ${style}`} />
      </div>
    );
  }
}


const StyleBubbleContainer = connect(
  (state) => ({
    styles: state.styles,
    selectedStyle: state.selectedStyle
  }),
  (dispatch) => ({
    setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style })
  })

)(StyleBubble);
export default StyleBubbleContainer;