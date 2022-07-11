import React from 'react';
//import containers next
import QuestionList from './QuestionList';

//NOTE: Should only have containers rendered inside, using QuestionList
//component temporarily, will change either when done with CSS or when container is built

function App() {
  return (
    <div>
      <div>
        <QuestionList />
      </div>
    </div>
  );
}

export default App;
