import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import ApiFetch from './components/apifetch';
import ApiPost from './components/apipost';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/bananas">See All movies</Link>
          <Link to="/addmovie">Add a movie!</Link>


          <Route exact path="/" component={App} />
          <Route exact path="/bananas" component={ApiFetch} />
          <Route exact path="/addmovie" component={ApiPost} />

        </div>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
