import React from 'react';
import * as ReactRedux from 'react-redux';

import store from './store';
import Overview from './components/Overview.jsx';

function App() {
  return (
    <div>
      <ReactRedux.Provider store={store}>
        <Overview />
      </ReactRedux.Provider>
    </div>
  );
}

export default App;
