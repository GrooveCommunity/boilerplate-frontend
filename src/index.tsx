import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';

import configureStore from 'src/store';
import reportWebVitals from 'src/reportWebVitals';

import Routes from './routes';

const store = configureStore();
const rootElement = document.getElementById('root');

const app = (
  <React.StrictMode>
    <Provider store={store} context={ReactReduxContext}>
      <Routes />
    </Provider>
  </React.StrictMode>
);

ReactDOM[rootElement && rootElement.hasChildNodes() ? 'hydrate' : 'render'](app, rootElement);

reportWebVitals();
