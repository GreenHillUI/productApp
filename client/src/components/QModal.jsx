import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { postQ, postA } from './QAhelp/QArequests';

function QModal({ pID }) {
  // const qModal = useSelector((state) => state.qList.mo)
  const dispatch = useDispatch();
  const pName = useSelector((state) => state.productInfo.name);
  const aModal = useSelector((state) => state.qList.aModal);
  const aModalQ = useSelector((state) => state.qList.aModalQ);

  function onSubmitClickVal(e) {
    e.preventDefault();
    const postObj = {
      body: document.getElementById('newQA').value,
      name: document.getElementById('nick').value,
      email: document.getElementById('email').value,
    };
    if (aModal) {
      postObj.question_id = aModalQ.question_id;
      postA(postObj);
      dispatch({ type: "A_MODAL", payload: { on: false, q: 10001 } });
    } else {
      postObj.product_id = pID;
      postQ(postObj);
      dispatch({ type: 'Q_MODAL', payload: false });
    }
    //close window on submit
    alert(`${aModal ? 'Answer' : 'Question'} Submitted!`);

    axios.get(`a/questions/${pID}?count=${100}`)
      .then((res) => dispatch({ type: 'SET_QUESTIONS', payload: res.data }))
      .catch((err) => console.error(err));

  }

  const closeModal = () => {
    dispatch({ type: 'Q_MODAL', payload: false });
    dispatch({ type: 'A_MODAL', payload: { on: false, q: 10001 } });
  };



  return (
    <div className='box-shadow'>
      <div id='qModal'>
        <button id='close-modal' onClick={closeModal} type='button'>
          CLOSE
        </button>
        <h1 id='q-modal-title'>
          { aModal ? 'Submit your Answer' : 'Ask Your Question' }
        </h1>
        <h4 id='q-modal-subtitle'>
          {aModal ? `${pName}: ` : `About the ${pName}` }
        </h4>
        {aModal && <h2 id='q-sb-question'>{aModalQ.question_body}</h2>}
        <form className='modal-form' onSubmit={onSubmitClickVal}>
          <span id='req-span'> ( * ) indicates required field</span>
          <br />
          <br />
          <label className='mod-label' htmlFor='newQA'>
            { aModal ? 'Your Answer *' : 'Your Question *' }
            <br />
            <textarea
              className='q-text-area'
              rows='2'
              col='500'
              id='newQA'
              type=''
              maxLength='1000'
              name='newQA'
              placeholder={aModal ? 'Give us your two cents.. ' : 'What do you want to know about the product? '}
              required
            />
          </label>
          <br />
          <br />
          <label className='mod-label' htmlFor='nick'>
            NickName *
            <br />
            <input
              className='mod-input'
              name='nick'
              id='nick'
              placeholder='Ex: jackson11!'
              maxLength='60'
              required
            />
            <br />
          </label>
          <span>
            For privacy reasons, do not use your full name or email address.
          </span>
          <br />
          <br />
          <label className='mod-label' htmlFor='email'>
            Email *
            <br />
            <input
              className='mod-input'
              name='email'
              id='email'
              type='email'
              placeholder='Ex: Jackson@gmail.com'
              maxLength='60'
              required
            />
            <br />
          </label>
          <span>
            For authentication reasons, you will not be emailed.
          </span>
          <br />
          <br />
          <button id='modal-submit' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default QModal;
