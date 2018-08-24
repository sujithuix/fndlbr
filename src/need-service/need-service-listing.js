import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class NeedServiceListing extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="need-service-listing">
            <Link to="/need-service-listing/need-service-people-list">
                <div className="card nav-service nav-provide-service">
                  Service One
                </div>
              </Link>
              <Link to="/need-service-listing/service-people-list">
                <div className="card nav-service nav-provide-service">
                Service Two
                </div>
              </Link>
              <Link to="/need-service-listing/service-people-list">
                <div className="card nav-service nav-provide-service">
                Service Three
                </div>
              </Link>
              <Link to="/need-service-listing/service-people-list">
                <div className="card nav-service nav-provide-service">
                Service Three
                </div>
              </Link>
              <Link to="/need-service-listing/service-people-list">
                <div className="card nav-service nav-provide-service">
                Service Three
                </div>
              </Link>

              <Link to="/need-service-listing/service-people-list">
                <div className="card nav-service nav-provide-service">
                Service Three
                </div>
              </Link>
            </div>
        )
    }

}

export default NeedServiceListing; 