import React from 'react';
import Overview from './Overview';
import QListContainer from '../containers/QListContainer';
import RelatedProducts from './RelatedProducts';

function App() {
  return (
    <>
      <Overview />
      <RelatedProducts />
      <QListContainer />
    </>
  );
}

export default App;
