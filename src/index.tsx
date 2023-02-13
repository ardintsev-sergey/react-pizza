import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router basename='/react-pizza'>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>
  );
}
