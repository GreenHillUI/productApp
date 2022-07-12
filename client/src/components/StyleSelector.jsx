import React from 'react'
import StyleBubble from './StyleBubble'


class StyleSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {            
        }
        this.setDefaultStyle = this.setDefaultStyle.bind(this);
        this.setStyle = this.setStyle.bind(this);
    }

    setDefaultStyle() {
        let styles = this.props.styles;
        if(styles) {
            let defaultStyle = this.props.styles.filter((style) => { return style["default?"] === true})
            this.setState({selectedStyle: defaultStyle})
            }
       
    }

    componentDidMount() {
        this.setDefaultStyle();
        console.log(this.props)
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