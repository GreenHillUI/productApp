import React from 'react';
import { connect } from 'react-redux';

function makeSizeOptions(skuList) {
  let optionList = [];
  if (skuList) {
    optionList = Object.entries(skuList).map((sku) => {
      if (sku[1].quantity > 0) {
        return (<option key={sku[0]} value={sku[0]}>{sku[1].size}</option>);
      }
      
    });
 
    
  }
  optionList.unshift(<option value="Select Size">Select Size</option>);
  return optionList;
}

function AddToCart(props) {
  const { selectedStyle, selectedSku, setSelectedSku } = props;



  const sizeOptions = makeSizeOptions(selectedStyle.skus);

  

  function handleChange(event) {
    const sku = Object.entries(selectedStyle.skus).filter((entry) => entry[0] === event.target.value);
    console.log(` Selected Size: ${event.target.value}`, sku);
    setSelectedSku(sku);
  } 

  function makeQuantityOptions(quantity) {
    const quantityOptionList = [];
    const max = quantity >= 15 ? 15 : quantity;
    for (let i = 1; i <= max; i += 1) {
      quantityOptionList.push(<option value={i}>{i}</option>);
    }
    return quantityOptionList;
  }

  return (
    <div>
      <label htmlFor='size-select'>Size: </label>
      <select id='size-select' onChange={handleChange}>{sizeOptions.length !== 0 ? sizeOptions : `Out of Stock`}</select>
      <label htmlFor='qty-select'>Qty: </label>
      <select id='qty-select'>{selectedSku.length > 0 ? makeQuantityOptions(selectedSku[0][1].quantity) : <option>Loading</option>}</select>
      <button id='addToCart'>Add to Cart</button>            
    </div>

  );
  
}


const AddToCartContainer = connect(
  (state) => ({
    selectedStyle: state.selectedStyle,
    selectedSku: state.selectedSku
  }),

  (dispatch) => ({
    setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style }),
    setSelectedSku: (sku) => dispatch({ type: 'SETSELECTEDSKU', selectedSku: sku })
  })
)(AddToCart);

export default AddToCartContainer;