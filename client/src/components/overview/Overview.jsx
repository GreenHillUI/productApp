/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import React from "react";
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';
import StyleSelector from "../StyleSelector";
import AddToCart from '../addToCart/AddtoCart';
import Gallery from '../Gallery';
import Stars from '../Stars';
import SocialMediaBar from "../SocialMediaBar";
import { getTotalReviews, handleAllReviewsClick } from './overviewhelpers';

const iconClass = { className: 'closeIcon' };

function Overview({
  productInfo, selectedStyle, metaData, expandedView, setExpandedView
}) {

  const closeIconStyle = { fill: 'black', height: '5em', width: '5em' };

  function handleModalClose() {
    setExpandedView(false);
  }

  const modalCloseButton = (
    <button
      className='overviewModalClose'
      type='button'
      onClick={handleModalClose}
    >
      <AiOutlineClose style={closeIconStyle} />
    </button>
  );
  const totalReviews = getTotalReviews(metaData) || 0;

  return (
    <div id='overviewContainer'>
      <IconContext.Provider value={iconClass}>
        { expandedView
        && <div id='overviewModal'>
          {modalCloseButton}
          <div className="overviewModalView">
            <Gallery />
          </div>
        </div>}
      </IconContext.Provider>
      <div id='overviewProductInfo'>
        <div id='overviewTop'>
          <div id='overviewStars'>
            Review Score
            <Stars rating={metaData} />
            <button
              id='overviewReadAll'
              type='button'
              onClick={handleAllReviewsClick}
            >
              {`  read all  ${totalReviews} reviews  `}
            </button>
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
                    $ {selectedStyle.original_price}
                  </s>
                  ${selectedStyle.sale_price}!
                </div>
              ) : `$${selectedStyle.original_price}` }
          </div>
          <StyleSelector />
          <AddToCart />
          <SocialMediaBar />
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
              .map((feature) => <li key={feature.feature}>
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
    </div>
  );
}



const OverviewContainer = connect(
  // connects the props to the state saved in the store
  (state) => ({
    productInfo: state.productInfo,
    styles: state.styles,
    selectedStyle: state.selectedStyle,
    metaData: state.metaData,
    displayIndex: state.displayIndex,
    expandedView: state.expandedView
  }),
  // links the event handler to the store via dispatch
  (dispatch) => ({
    // eslint-disable-next-line object-shorthand
    setStyles: (styles) => dispatch({ type: 'SETALLSTYLES', styles: styles }),
    setProductInfo: (info) => dispatch({ type: 'SETPRODUCTINFO', productInfo: info }),
    setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style }),
    setMetaData: (data) => dispatch({ type: 'SETMETADATA', metaData: data }),
    incrementDisplayIndex: (num) => dispatch({ type: `INCREMENT`, displayIndex: num }),
    decrementDisplayIndex: (num) => dispatch({ type: `DECREMENT`, displayIndex: num }),
    setExpandedView: (bool) => dispatch({ type: `SETEXPANDEDVIEW`, expandedView: bool })
  }),
)(Overview);

export default OverviewContainer;
