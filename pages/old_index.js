import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Upload from './Upload';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Header from '../components/Header';

const App = () => (
  <HashRouter>
    <Header />

    <Switch>
      <Route path="/upload" component={Upload} />
      <Route path="/" component={Home} />
    </Switch>
  </HashRouter>
);

export default App;
