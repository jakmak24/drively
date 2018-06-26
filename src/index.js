import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <div className="container">
      <Route path="/Dashboard" component={Layout}/>
      <Route path="/Vehicles" component={Layout}/>
      <Route path="/Operations" component={Layout}/>
      <Route path="/Statistics" component={Layout}/>
    </div>
  </BrowserRouter>
  ),
   document.getElementById('root'));
registerServiceWorker();
