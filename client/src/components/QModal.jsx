import React from 'react';

function QModal({ submitForm }) {

  function onSubmitClickVal() {
    return submitForm({
      question: document.getElementById('#newQA'),
      nickname: document.getElementById('#nick'),
      email: document.getElementById('#email'),
    });
  }

  return (
    <div id='qModal'>
      <h3> Ask Your Question</h3>
      <h2>About the [Product Name Here]</h2>
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