import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { postQ, postA, getQ } from './QAhelp/QArequests';

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

    axios.get(`/a/questions/${pID}?count=${100}`)
      .then((res) => res.data)
      .catch((err) => { console.log(err); });

  }

  const closeModal = () => {
    dispatch({ type: 'Q_MODAL', payload: false });
    dispatch({ type: 'A_MODAL', payload: { on: false, q: 10001 } });
  };



  return (
    <div id='qModal'>
      <button onClick={closeModal} type='button'>
        CLOSE WINDOW
      </button>
      <h1>
        { aModal ? 'Submit your Answer' : 'Ask Your Question' }
      </h1>
      <h4>
        {aModal ? `${pName}:${aModalQ.question_body}` : `About the ${pName}` }
      </h4>
      <form className='modal' onSubmit={onSubmitClickVal}>
        <span> (*) indicates required field</span>
        <br />
        <br />
        <label htmlFor='newQA'>
          { aModal ? 'Your Answer *' : 'Your Question *' }
          <br />
          <textarea rows='2' col='500' id='newQA' type='' maxLength='1000' name='newQA' placeholder={aModal ? 'Your Answer: ' : 'Your Question: '} required />
        </label>
        <br />
        <br />
        <label htmlFor='nick'>
          NickName*
          <br />
          <input name='nick' id='nick' placeholder='Example: jackson11!' maxLength='60' required />
          <br />
          <span>
            For privacy reasons, do not use your full name or email address.
          </span>
        </label>
        <br />
        <br />
        <label htmlFor='email'>
          Email*
          <br />
          <input name='email' id='email' type='email' placeholder='Example: Jackson@gmail.com' maxLength='60' required />
          <br />
          <span>
            For authentication reasons, you will not be emailed.
          </span>
        </label>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default QModal;
