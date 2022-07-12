import React from 'react';
import {connect} from 'react-redux';

class AddToCart extends React.Component {
    // The first dropdown will list all of the available sizes for the currently selected style. 
    // Only sizes that are currently in stock for the style selected should be listed. Sizes not available should not appear within the list. If there is no remaining stock for the current style, the dropdown should become inactive and read “OUT OF STOCK”. 
    // When collapsed, the dropdown should show the currently selected size. 
    // By default, the dropdown should show “Select Size”. 

    //Take the skus object from the selected style, 
    //Check each sku for non-zero quantity,
    //If Non-zero, wrap the size in option tags and push to result array, If zero ignore
    //Return array of wrapped DOM elements
    makeSizeOptions(skuList) {
      let optionList = [];
      //console.log(skuList)
      for (const key in skuList) {
       // console.log(skuList[key])
          if(skuList[key].quantity !== 0) {
            //console.log(sku.quantity);
              optionList.push(
                  <option data-key={key} value={skuList[key].size}>{skuList[key].size}</option>
                  )
                }
            }
            return optionList
    }

    handleChange(event) {
        console.log(event.target)
    
     
    }


    render() {
        let selectedStyle = this.props.selectedStyle
        let sizeOptions = this.makeSizeOptions(selectedStyle.skus);
        //console.log(sizeOptions)
        return(
            <div>
                <label htmlFor='size-select'>Size: </label>
                <select id='size-select' onChange={this.handleChange.bind(this)}>{sizeOptions.length !== 0 ? sizeOptions : `Out of Stock`}</select>
                <label htmlFor='qty-select'>Qty: </label>
                <select id='qty-select'></select>
                <button id='addToCart'>Add to Cart</button>               
            </div>
        )
    }
}


const AddToCartContainer = connect(
    (state) => ({
        selectedStyle: state.selectedStyle
    }),

    (dispatch) => ({
        setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style}),
        setSelectedSku: (sku) => dispatch({ type: 'SETSELECTEDSKU', selectedSku: sku})
    })
)(AddToCart)

export default AddToCartContainer;