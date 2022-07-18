import React from "react";
import { connect } from 'react-redux';
//import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa' ;
import StyleSelector from "./StyleSelector";
import AddToCart from './AddtoCart';
import Gallery from './Gallery';
import Stars from './Stars';

function Overview({ productInfo, selectedStyle, metaData }) {

  //Add section for product features if they exist
  return (
    //Coming back to image gallery after writing a carousel
    <div id='overview'>
      <h2 className='overviewProductCategory'>{productInfo ? productInfo.category : `Loading`}</h2>
      <h1 className='overviewProductName'>
        {productInfo ? productInfo.name : `Loading`}
      </h1>
      <Gallery /> 
      <div className='overviewProductSlogan'>{productInfo ? productInfo.slogan : `Loading`}</div>
      <div className='overviewProductInfo'>
        <p className="overviewProductDescription">
          {productInfo ? productInfo.description : `Loading`}
        </p>
      </div>
      <StyleSelector />
      <div id='overviewStars'>
        Review Score: <Stars rating={metaData} />

      </div>

     
      <div className='overviewPrice'>
        
        Price: { selectedStyle.sale_price ? <div> <s>${selectedStyle.original_price}</s> ${selectedStyle.sale_price}!! </div> : `$${selectedStyle.original_price}` }
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
    selectedStyle: state.selectedStyle,
    metaData: state.metaData
  }),
  // links the event handler to the store via dispatch
  (dispatch) => ({
    // eslint-disable-next-line object-shorthand
    setStyles: (styles) => dispatch({ type: 'SETALLSTYLES', styles: styles }),
    setProductInfo: (info) => dispatch({ type: 'SETPRODUCTINFO', productInfo: info }),
    setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style }),
    setMetaData: (data) => dispatch({ type: 'SETMETADATA', metaData: data }),

  }),
)(Overview);

export default OverviewContainer;
