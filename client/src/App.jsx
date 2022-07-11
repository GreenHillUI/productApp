import React from 'react';
import * as ReactRedux from 'react-redux';

import store from './store';
import Search from './example/Search';

function App() {
  return (
    <div>
      <ReactRedux.Provider store={store}>
        <Search />
      </ReactRedux.Provider>
    </div>
  );
}

export default App;
