import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root for React 18
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
