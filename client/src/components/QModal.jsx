import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postQ } from './QAhelp/QArequests';

function QModal({ pID }) {
  // const qModal = useSelector((state) => state.qList.mo)
  const dispatch = useDispatch();
  const pName = useSelector((state) => state.productInfo.name);
  function onSubmitClickVal(e) {
    e.preventDefault();
    postQ({
      body: document.getElementById('newQA').value,
      name: document.getElementById('nick').value,
      email: document.getElementById('email').value,
      product_id: pID
    });
    alert('Form Submitted!');
    dispatch({ type: 'Q_MODAL', payload: false });
  }



  return (
    <div id='qModal.on'>
      <button onClick={() => dispatch({ type: 'Q_MODAL', payload: false })} type='button'>
        CLOSE WINDOW
      </button>
      <h2> Ask Your Question</h2>
      <h4> About the {pName} </h4>
      <form className='modal' onSubmit={onSubmitClickVal}>
        <label htmlFor='your'>Question*
          <input id='newQA' type='text-area' name='your' placeholder='Your Question: ' />
        </label>
        <label htmlFor='nickname'>NickName*
          <input name='nickname' id='nick' placeholder='Example: jackson11!' />
          <span>
            For privacy reasons, do not use your full name or email address.
          </span>
        </label>
        <label htmlFor='email'>Email*
          <input name='email' id='email' placeholder='Why did you like the product or not?' />
          <span>
            For authentication reasons, you will not be emailed.
          </span>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default QModal;