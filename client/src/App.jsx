import React from 'react';
import Provider from 'react-redux';

import store from './store';
import Search from './example/Search';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Search />
      </Provider>
    </div>
  );
}

export default App;
