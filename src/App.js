import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
// import Category from './Category';
import logo from './logo.svg';
import './App.css';

import Home from './home/home';
import ProvideServicForm from './provide-service/provide-service-form';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <header className="App-header">
          <h1>App Header</h1>
          <Link to="/">Home</Link>
        </header>
        <section className="page-wrap container">
          
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/provide-service-form" component={ProvideServicForm} />
            </div>
          
        </section>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
