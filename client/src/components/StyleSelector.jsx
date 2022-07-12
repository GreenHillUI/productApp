import React from 'react'
import StyleBubble from './StyleBubble'


class StyleSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {            
        }
        
        if(this.props.styles !== undefined) {
            
        }
        this.setStyle = this.setStyle.bind(this);
    }




    
    setStyle(style)  {
            this.setState({selectedStyle: style})
    
    }

    

    render() {
        let styles = this.props.styles;


        
        return(
            <div>
                Available Styles: {styles ? styles.length :  `Loading`}
  
       {styles ? styles.map((style) => { return <StyleBubble key={style.style_id} style={style} styleClick={this.setStyle} /> }) : `Loading` }
 
            </div>

        )
    }
    
}

export default StyleSelector;