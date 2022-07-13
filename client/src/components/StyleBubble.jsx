import React from 'react';



function StyleBubble({ style, styleClick }) {

  function handleClick(e) {
    styleClick(style);
  }

  return ( 
    <div className="style-bubble" onClick={handleClick}>
      <div>{style.name}</div>
      <img className="style-thumbnail" src={style.photos[0].thumbnail_url} />
    </div>
  );
};

export default StyleBubble;