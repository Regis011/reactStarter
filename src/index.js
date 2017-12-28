import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
//import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <BrowserRouter>
  //   <Route path="" component={} />
  //   <Route path="" component={} />
  // </BrowserRouter>,
  <App />, document.getElementById('root')
);
registerServiceWorker();
