/**
 * This file is run automatically when the website is painted for the first time
 * it should not have to be changed. To add components modify App.jsx
 */

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
