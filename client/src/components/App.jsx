import React from 'react';
import Overview from './Overview';
import QListContainer from '../containers/QListContainer';
import RelatedProducts from './RelatedProducts';

import Setter from './Setter';

//NOTE: Should only have containers rendered inside, using QuestionList
//component temporarily, will change either when done with CSS or when container is built

function App() {
  return (
    <>
      <Setter />
      <Overview />
      <RelatedProducts />
      <QListContainer />
    </>
  );
}

export default App;
