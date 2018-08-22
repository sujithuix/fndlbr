import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class NeedServiceItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="need-service-listing">
                   Service Name
            </div>
        )
    }

}

export default NeedServiceItem; 