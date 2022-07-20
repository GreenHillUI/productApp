import React from 'react';
import { connect } from 'react-redux';

function makeSizeOptions(skuList) {
  let optionList = [];
  if (skuList) {
    optionList = Object.entries(skuList)
      .filter((entry) => entry[1].quantity > 0)
      .map(([key, value]) => (
        <option key={key} value={key}>{value.size}</option>
      ));

  }
  if (optionList.length === 0) {
    optionList.unshift(<option key='OutOfStock' value={null}> Out of Stock</option>);
  }
  optionList.unshift(<option key='selectSizeDefault' value=''>Select Size</option>);
  return optionList;
}



function makeQuantityOptions(quantity, sku) {
  const quantityOptionList = [];
  const max = quantity >= 15 ? 15 : quantity;
  for (let i = 1; i <= max; i += 1) {
    quantityOptionList.push(<option key={`${sku}${i}`} value={i}>{i}</option>);
  }
 
  return quantityOptionList;
}


function AddToCart({ selectedStyle, selectedSku, setSelectedSku }) {

  const sizeOptions = makeSizeOptions(selectedStyle.skus);

  function handleSizeChange(event) {
    const sku = Object.entries(selectedStyle.skus).filter((entry) => entry[0] === event.target.value);
    setSelectedSku(sku);
  }


  return (
    <div id='addToCartContainer'>
      <form className='addToCartForm' action='/'>
        <label htmlFor='sizeSelect'>
          Size: : 
          <select 
            id='sizeSelect' 
            onChange={handleSizeChange} 
            required
          >
            {sizeOptions.length === 1 ? `Out of Stock` : sizeOptions}
          </select>
        </label>
        <label htmlFor='quantitySelect'>
          Qty: : 
          <select id='quantitySelect'>
            {selectedSku.length > 0 ? makeQuantityOptions(selectedSku[0][1].quantity, selectedSku) : <option>-</option>}
          </select>
        </label>
        <br />
        { sizeOptions.length 
          ? <input  
              id='addToCartButton' 
              type='submit' 
              value='Add To Cart' 
          /> 
          : <input 
              id='addToCartButton' 
              type='button' 
              value='Add To Cart' 
              disabled 
          /> }
      </form>
    </div>
    //I feel there's a better way to write the add button conditional above, but not sure.
  );

}


const AddToCartContainer = connect(
  (state) => ({
    selectedStyle: state.selectedStyle,
    selectedSku: state.selectedSku
  }),

  (dispatch) => ({
    //Sets Slected SKU based on Size Selector
    setSelectedSku: (sku) => dispatch({ type: 'SETSELECTEDSKU', selectedSku: sku }),
    setQuantity: (qty) => dispatch({ type: 'SETQUANTITY', quantity: qty })
  })
)(AddToCart);

export default AddToCartContainer;