import axios from 'axios';
import React from "react";
import { connect } from 'react-redux';
//import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa' ;
//import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs' ;
import StyleSelector from "./StyleSelector";
import AddToCart from './AddtoCart';


function setDefaultStyle(styles) {
  //console.log(styles);
  const result = styles.filter((style) => style['default?'] === true);
  //console.log(`Result `, result)
  return result;
}

class Overview extends React.Component {
 

  //Finds and returns average of reviews
  //TODO: Handle edge case for no reviews in accordance with business docs
  //Terminate repeating decimal
  // reviewAverage() {
  //   var total = 0;
  //   var weightedSum = 0;
  //   let ratings = this.state.reviewMetaData.ratings;
  //   for (var i = 1; i < 6; i++ ) {
  //     total += parseInt(ratings[i]);
  //     weightedSum += i * ratings[i]
  //   }
  //   return (weightedSum / total)
  // }

  // generateStars(reviewAverage) {
  //   let filledStars = Math.trunc(reviewAverage);
  //   let filledRemainder = reviewAverage % 1;
  //   let emptyStars = 5 - filledStars;
  //   let starBar = [];
  //   for (var i = 0; i < filledStars; i++) {
  //     starBar.push(<BsStarFill/>)
  //   } 
    
  //   if (filledRemainder >= 0.5) {
  //     starBar.push(<BsStarHalf/>)
  //   }
    
  //   for (var i = 0; i < emptyStars; i++) {
  //     starBar.push(<BsStar/>)
  //   } 

  //   return starBar;
  // }

  componentDidMount() {
    const { setStyles, setSelectedStyle, setProductInfo } = this.props;
    axios.get('/products/40348')
      .then((response) => {
        //console.log(response.data);
        setProductInfo(response.data);
      })
      .catch(() => console.log(`Error loading product info`));
      
    axios.get('/products/40348/styles')
      .then((response) => {
        setStyles(response.data.results);
        setSelectedStyle(setDefaultStyle(response.data.results));
      })
      .catch((err) => console.log(err));
      

  }
  


  //Add section for product features if they exist
  render() {
    const { productInfo, selectedStyle } = this.props;

     
    return (
    //Coming back to image gallery after writing a carousel
      <div>
          
        <h2>{productInfo ? productInfo.category : `Loading`}</h2>
        <h1>
          {productInfo ? productInfo.name : `Loading`} 
        </h1>
        <div>***IMAGE GALLERY PLACEHOLDER*** </div> 
        <div>{productInfo ? productInfo.slogan : `Loading`}</div>
        <div>
          <p>
            {productInfo ? productInfo.description : `Loading`} 
          </p>
        </div>

        <div>
          Styles:
          <br />
          <StyleSelector />
          <div>
            Review Score: 
            {/*this.generateStars(this.reviewAverage())*/}
          </div>
        </div>
        <div>
          Price: 
          {selectedStyle.sale_price ? `Was $${selectedStyle.original_price} Now: $${selectedStyle.sale_price}` : `$${selectedStyle.original_price}`}
        </div>

        <AddToCart />
      </div>
    );
  }

}

const OverviewContainer = connect(
  // connects the props to the state saved in the store
  (state) => ({
    productInfo: state.productInfo,
    styles: state.styles,
    selectedStyle: state.selectedStyle
  }),
  // links the event handler to the store via dispatch
  (dispatch) => ({
    setStyles: (styles) => dispatch({ type: 'SETALLSTYLES', styles: styles }),
    setProductInfo: (info) => dispatch({ type: 'SETPRODUCTINFO', productInfo: info }),
    setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style })
  }),
)(Overview);
  
export default OverviewContainer;
  