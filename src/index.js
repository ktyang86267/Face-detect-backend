import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ParticleBackground from './components/ParticleBackground/particle-background';
import Navigation from './components/Navigation/navigation';
import Register from './containers/register';
import SignIn from './containers/sign-in';
import App from './containers/App';
import reducer from './reducers/index';
import './style/style.css';
import 'tachyons';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={Navigation} />
        <Route path="/" component={ParticleBackground} />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/main" component={App} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
);
