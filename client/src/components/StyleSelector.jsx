import React from 'react';
import { connect } from 'react-redux';
import { FaCheckCircle } from 'react-icons/fa';
import StyleBubble from './StyleBubble';




function StyleSelector(props) {


  const { styles, selectedStyle } = props;

  if (styles.length > 0) {
    const wrappedStyles = styles.map((style) => (
      <div key={`Bubble ${style.style_id}`} className="styleBubbleWrapper">
        <StyleBubble key={style.style_id + style} style={style} /> 
        {style.style_id === selectedStyle.style_id ? <FaCheckCircle id="styleCheck" /> : null }
      </div>
    ));
    return (
      <div id='styleSelector'> 
        <div className='overviewSelectedStyle'>
          Style: 
          {selectedStyle.name}
        </div>
        <div className='stylesContainer'>
          {wrappedStyles}
        </div>
      </div>
    );
  }

}


const StyleSelectorContainer = connect(
  (state) => ({
    styles: state.styles,
    selectedStyle: state.selectedStyle
  }),

  (dispatch) => ({
    setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style })
  })
)(StyleSelector);

export default StyleSelectorContainer;