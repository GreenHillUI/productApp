import React from 'react';
//import containers next
import QListContainer from '../containers/QListContainer';

//NOTE: Should only have containers rendered inside, using QuestionList
//component temporarily, will change either when done with CSS or when container is built

function App() {
  return (
    <div>
      <div>
        <QListContainer />
      </div>
    </div>
  );
}

export default App;
