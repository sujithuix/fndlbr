import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="row">
            <div className="col-md-6">
              <Link to="/provide-service-form">
                <div className="nav-service nav-provide-service">
                  Looking for service
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <div className="nav-service nav-need-service">
                Need Service
              </div>
            </div>
          </div>
        )
    }

}

export default Home; 