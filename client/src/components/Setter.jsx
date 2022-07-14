import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


//A component to simulate arbitrary user clicks on products

function Setter({
  setProductInfo, setSelectedStyle, setMetaData, setStyles
}) {
  
  function setDefaultStyle(styles) {
    //console.log(styles);
    const result = styles.filter((style) => style['default?'] === true);
    return result;
  }
    
  function handleClick() {
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
      
    axios.get('/reviews/meta', { params: { product_id: 40348 } })
      .then((response) => {
        setMetaData(response.data.ratings);
      })
      .catch((err) => console.log(err));  
  }

  return ( 
    <button onClick={handleClick}>Set State</button>
  );
}

const SetterContainer = connect(
  (state) => ({
    productInfo: state.productInfo,
    styles: state.styles,
    selectedStyle: state.selectedStyle,
    metaData: state.metaData
  }),

  (dispatch) => ({
    setProductInfo: (info) => dispatch({ type: 'SETPRODUCTINFO', productInfo: info }),
    setStyles: (styles) => dispatch({ type: 'SETALLSTYLES', styles: styles }),
    setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style }),
    setMetaData: (data) => dispatch({ type: 'SETMETADATA', metaData: data })
  })
)(Setter);
export default SetterContainer;