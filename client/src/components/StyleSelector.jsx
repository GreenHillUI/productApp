import React from 'react'
import {connect} from 'react-redux'
import StyleBubble from './StyleBubble'
import {FaCheckCircle} from 'react-icons/fa'


class StyleSelector extends React.Component {
    // constructor(props) {
    //     super(props)
      
    // }

   handleStyleClick(style) {
    console.log(style)
    this.props.setSelectedStyle([style])

   }
    render() {
        let styles = this.props.styles;
        let selectedStyle = this.props.selectedStyle;
        return(
            <div>
                Available Styles: {styles ? styles.length :  `Loading`}
                   {styles ? styles.map((style) => {
                     if (selectedStyle.style_id === style.style_id ) {
                         return (
                            <div>
                                <FaCheckCircle />
                                <StyleBubble key={style.style_id} style={style}  />
                            </div>

                            
                         ) }return <StyleBubble key={style.style_id} style={style} styleClick={this.handleStyleClick.bind(this)} /> }) : `Loading` }
                   
             </div>
        )
    } 
  
}


const StyleSelectorContainer = connect(
    (state) => ({
        styles: state.styles,
        selectedStyle: state.selectedStyle
    }),
    
    (dispatch) => ({
        setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style})
    })
    )(StyleSelector)
    
    export default StyleSelectorContainer;