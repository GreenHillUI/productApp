import React from 'react';
import Overview from './Overview';
import QListContainer from '../containers/QListContainer';
import RelatedProducts from './RelatedProducts';
import Ratings from './Ratings';

//NOTE: Should only have containers rendered inside, using QuestionList
//component temporarily, will change either when done with CSS or when container is built

function App() {
  return (
    <>
      <Overview />
      <RelatedProducts />
      <QListContainer />
      <Ratings />
    </>
  );
}

export default App;
