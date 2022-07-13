import React from 'react';
import { connect } from 'react-redux';

function makeSizeOptions(skuList) {
  const optionList = [];
  console.log(skuList);

  return optionList;
}


function handleChange(event) {
  console.log(event.target);

}


class AddToCart extends React.Component {
// The first dropdown will list all of the available sizes for the currently selected style. 
// Only sizes that are currently in stock for the style selected should be listed. Sizes not available should not appear within the list. If there is no remaining stock for the current style, the dropdown should become inactive and read “OUT OF STOCK”. 
// When collapsed, the dropdown should show the currently selected size. 
// By default, the dropdown should show “Select Size”. 

  //Take the skus object from the selected style, 
  //Check each sku for non-zero quantity,
  //If Non-zero, wrap the size in option tags and push to result array, If zero ignore
  //Return array of wrapped DOM elements
  

  render() {
    const { selectedStyle } = this.props;
    const sizeOptions = makeSizeOptions(selectedStyle.skus);
    //console.log(sizeOptions)
    return (
      <div>
        <label htmlFor='size-select'>Size: </label>
        <select id='size-select' onChange={handleChange}>{sizeOptions.length !== 0 ? sizeOptions : `Out of Stock`}</select>
        <label htmlFor='qty-select'>Qty: </label>
        <select id='qty-select'>PLACEHOLDER</select>
        <button id='addToCart'>Add to Cart</button>            
      </div>
    );
  }
}


const AddToCartContainer = connect(
  (state) => ({
    selectedStyle: state.selectedStyle
  }),

  (dispatch) => ({
    setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style }),
    setSelectedSku: (sku) => dispatch({ type: 'SETSELECTEDSKU', selectedSku: sku })
  })
)(AddToCart);

export default AddToCartContainer;