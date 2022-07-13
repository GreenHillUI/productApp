import React from 'react';
import { connect } from 'react-redux';


function StyleBubble(props) {
  
  const { style, setSelectedStyle } = props;
  
  function handleClick() {
    console.log(style);
    setSelectedStyle([style]);
    
  }


  if (style !== undefined) {
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