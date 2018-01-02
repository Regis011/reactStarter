import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import Header from './components/header';
import Footer from './components/footer';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import PostsIndex from './components/posts_index';
import AlertTest from './components/alert';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div className="App">
      <Header />
      <section className="container">
        <div className="row">
          <Switch>
            <Route path="/posts" component={PostsIndex} />
            <Route path="/" component={AlertTest} />
            {/* <Route path="/post/:id" component={PostShow} />
            <Route path="/posts/new" component={PostsNew} /> */}
            </Switch>
        </div>
      </section>
      <Footer />
    </div>
  </BrowserRouter>
</Provider>,
  document.getElementById('root')
);
// Single Page Application
// ReactDOM.render(
//   <App />, document.getElementById('root')
// );
registerServiceWorker();
