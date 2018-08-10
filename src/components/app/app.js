'use strict';
import React, {Component, Fragment} from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
  <Fragment>
    <main>
    <h2>Note Lab</h2>
    
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      </ul>
        <div>
        <Route exact path='/' component={Landing}/> 
        <Route exact path='/dashboard' component={Dashboard}/>
        </div>
    </main>
  </Fragment>
  </BrowserRouter>
    );
  }
}