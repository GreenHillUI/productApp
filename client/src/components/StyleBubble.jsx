import React from 'react';
import { connect } from 'react-redux';


function StyleBubble({ style, setSelectedStyle, setSelectedSku }) {

  function handleClick() {
    setSelectedStyle([style]);
    setSelectedSku([]);
  }


  if (style) {
    return (
      <div className="styleBubble">
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
    setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style }),
    setSelectedSku: (sku) => dispatch({ type: 'SETSELECTEDSKU', selectedSku: sku })
  })

)(StyleBubble);
export default StyleBubbleContainer;

