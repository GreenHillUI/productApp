import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';


const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

/**
 * This file is run automatically when the website is painted for the first time
 * it should not have to be changed. To add components modify App.jsx
 */

