import React from "react";
import { connect } from 'react-redux';
import StyleSelector from "./StyleSelector";
import AddToCart from './AddtoCart';
import Gallery from './Gallery';
import Stars from './Stars';



function getTotalReviews(ratings) {
  let total = 0;
  Object.keys(ratings).forEach((i) => {
    total += Number(ratings[i]);
  });
  return total;
}


function Overview({ productInfo, selectedStyle, metaData }) {

  //Add section for product features if they exist
  return (
    //Coming back to image gallery after writing a carousel
    <div id='overview'>
   
      <div id='overviewTop'>
        <div id='overviewStars'>
          Review Score 
          <Stars rating={metaData} />  
          <div id='overviewReadAll'>
            {`  read all  ${getTotalReviews(metaData)} reviews  `}
          </div>
        </div>
        <h2 className='overviewProductCategory'>
          {productInfo ? productInfo.category : `Loading`}
        </h2>
        <h1 className='overviewProductName'>
          {productInfo ? productInfo.name : `Loading`}
        </h1>
        <div className='overviewPrice'>
          { selectedStyle.sale_price 
            ? (
              <div> 
                <s>
                  $
                  {selectedStyle.original_price}
                </s>
                $
                {selectedStyle.sale_price}
                !!
              </div>     
            ) : `$${selectedStyle.original_price}` }
        </div>
        <StyleSelector />
        <AddToCart />
      </div>
      <Gallery /> 
  
      <div id='overviewTextBlurb'>
        <div className='overviewProductSlogan'>
          {productInfo ? productInfo.slogan : `Loading`}
        </div>
        <div className='overviewProductInfo'>
          <p className="overviewProductDescription">
            {productInfo ? productInfo.description : `Loading`}
          </p>
        </div>
        
      </div>
      <ul className='overviewFeatures'> 
        Features:
        { productInfo.features 
          ? productInfo.features
            .map((feature) => 
              <li key={feature.feature}>
                <div className='overviewFeatureName'>
                  {feature.feature}:
                </div>
                <div className='overviewFeatureValue'>
                  {feature.value}
                </div> 
              </li>) 
          : `Loading` }
      </ul>
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
