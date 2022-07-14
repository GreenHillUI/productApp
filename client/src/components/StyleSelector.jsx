import React from 'react';
import { connect } from 'react-redux';
import { FaCheckCircle } from 'react-icons/fa';
import StyleBubble from './StyleBubble';




function StyleSelector(props) {


  const { styles, selectedStyle } = props;

  if (styles.length > 0) {
    const wrappedStyles = styles.map((style) => (
      <div>
        {style.style_id === selectedStyle.style_id ? <FaCheckCircle /> : null }
        <StyleBubble key={style.style_id} style={style} />
      </div>
    ));
    return (
      <div>
        Available Styles:
        {styles.length}
        {wrappedStyles}
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