import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
      <main>
        <Navbar/>
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route component={Error}/>
              }
          </Switch>
      </main>
  )
}


export default App;
