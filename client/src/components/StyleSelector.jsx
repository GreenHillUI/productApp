import React from 'react'
import StyleBubble from './StyleBubble'
import {FaCheckCircle} from 'react-icons/fa'


class StyleSelector extends React.Component {
    // constructor(props) {
    //     super(props)
      
    // }

   
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
                                <StyleBubble key={style.style_id} style={style} styleClick={this.setStyle} />
                            </div>

                            
                         ) }return <StyleBubble key={style.style_id} style={style} styleClick={this.setStyle} /> }) : `Loading` }
                   
             </div>
        )
    } 
  
}

export default StyleSelector;

