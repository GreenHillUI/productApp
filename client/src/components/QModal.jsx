import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function QModal({ product }) {
  // const qModal = useSelector((state) => state.qList.mo)
  const dispatch = useDispatch();

  function onSubmitClickVal() {
    return submitForm({
      body: document.getElementById('#newQA'),
      name: document.getElementById('#nick'),
      email: document.getElementById('#email'),
      product_id: product.product_id
    });
  }



  return (
    <div id='qModal.on'>
      <button onClick={() => dispatch({ type: 'Q_MODAL', payload: false })} type='button'>
        CLOSE WINDOW
      </button>
      <h2> Ask Your Question</h2>
      <h4> About the {product || 'Thingamajig'} </h4>
      <form className='modal'>
        <label htmlFor='your' value='*'>
          <input id='newQA' type='text-area' name='your' placeholder='Your Question: ' />
        </label>
        <label htmlFor='nickname' value='*'>
          <input name='nickname' id='nick' placeholder='Example: jackson11!' />
          <span>
            For privacy reasons, do not use your full name or email address.
          </span>
        </label>
        <label htmlFor='email' value='*'>
          <input name='email' id='email' placeholder='Why did you like the product or not?' />
          <span>
            For authentication reasons, you will not be emailed.
          </span>
        </label>
        <button type='button' onClick={onSubmitClickVal}>Submit</button>
      </form>
    </div>
  );
}

export default QModal;