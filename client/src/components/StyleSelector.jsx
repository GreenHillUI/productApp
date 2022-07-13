import React from 'react';
import { connect } from 'react-redux';
import { FaCheckCircle } from 'react-icons';
import StyleBubble from './StyleBubble';


class StyleSelector extends React.Component {
  // constructor(props) {
  //   super(props)
    
  // }

  handleStyleClick(style) {
    const { setSelectedStyle } = this.props;
    console.log(style);
    setSelectedStyle([style]);
  }

  render() {
    const { styles, selectedStyle } = this.props;

    return (
      <div>
        Available Styles: 
        {styles ? styles.length : `Loading`}
        {styles ? styles.map((style) => {
          if (selectedStyle.style_id === style.style_id) { 
            return (
              <div>
                <FaCheckCircle />
                <StyleBubble key={style.style_id} style={style} />
              </div>
            );
          }
          return <StyleBubble key={style.style_id} style={style} styleClick={this.handleStyleClick} />;
        }) : `Loading` }
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