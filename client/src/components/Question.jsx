import React from 'react';

export default function Question() {
  return (
    <div className='question'>
      <span id='q-text'>Q: How the hell you do that?</span>
      <span id='q-links'>
        <button type='button' id='q-a'>Add Answer</button>
        <button type='button' id='q-h'>Helpful? Yes (0) |</button>
      </span>
    </div>
  );
}

