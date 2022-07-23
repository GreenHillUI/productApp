import React from 'react';
import Overview from './overview/Overview';
import QuestionList from './QuestionList';
import RelatedProducts from './RelatedProducts';
import Ratings from './Ratings';
import Setter from './Setter';
import Navbar from './navbar/Navbar';
//NOTE: Should only have containers rendered inside, using QuestionList
//component temporarily, will change either when done with CSS or when container is built

function App() {
  return (
    <>
      <Navbar />
      <Setter />
      <Overview />
      <RelatedProducts />
      <QuestionList />
      <Ratings />
    </>
  );
}

export default App;
