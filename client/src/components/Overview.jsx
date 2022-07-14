import axios from 'axios';
import React from "react";
import { connect } from 'react-redux';
//import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa' ;
//import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs' ;
import StyleSelector from "./StyleSelector";
import AddToCart from './AddtoCart';



function getDefaultStyle(styles) {

  const result = styles.filter((style) => style['default?'] === true);
 
  return result;
}

function Overview({ productInfo, selectedStyle }) {
  


  // componentDidMount() {
  //   const { setStyles, setSelectedStyle, setProductInfo } = this.props;
  //   const pingNum = 40348;
  //   axios.get(`/products/${pingNum}`)
  //     .then((response) => {
     
  //       setProductInfo(response.data);
  //     })
  //     .catch(() => console.log(`Error loading product info`));
      
  //   axios.get(`/products/${pingNum}/styles`)
  //     .then((response) => {
  //       setStyles(response.data.results);
  //       setSelectedStyle(getDefaultStyle(response.data.results));
  //     })
  //     .catch((err) => console.log(err));
      

  // }
  


  //Add section for product features if they exist
     
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

const OverviewContainer = connect(
  // connects the props to the state saved in the store
  (state) => ({
    productInfo: state.productInfo,
    styles: state.styles,
    selectedStyle: state.selectedStyle
  }),
  // links the event handler to the store via dispatch
  (dispatch) => ({
    setStyles: (styles) => dispatch({ type: 'SETALLSTYLES', styles }),
    setProductInfo: (info) => dispatch({ type: 'SETPRODUCTINFO', productInfo: info }),
    setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style })
  }),
)(Overview);
  
export default OverviewContainer;
  