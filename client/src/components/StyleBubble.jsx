import React from 'react';
import { connect } from 'react-redux';


function StyleBubble({ style, selectedStyle, setSelectedStyle }) {

  function handleClick() {
    setSelectedStyle([style]);
  }


  if (style) {
    return (
      <div className="styleBubble">
        {selectedStyle.style_id === style.style_id ? <div className='styleBubbleName'>{style.name}</div> : null }
         <img className="styleThumbnail" src={style.photos[0].thumbnail_url} onClick={handleClick} alt={`A thumbnail of ${style}`} />
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