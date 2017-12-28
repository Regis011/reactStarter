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
  // Remove tag <App /> and uncomment this
  // <BrowserRouter>
  // <div>
  //     <Route path="/" component={App} />
  //     <Route path="/hello" component={} />
  //     <Route path="/god" component={} />
  //   </div>
  // </BrowserRouter>,
  <App />, document.getElementById('root')
);
registerServiceWorker();
