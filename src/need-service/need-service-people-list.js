import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class NeedServicePeopleListing extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="need-service-people-list">
                <div className="area-filter">
                <p>Please select you area City and Area</p>
                    <form>
                        <div class="form-group">
                            <label class="form-check-label" for="exampleCheck1">City</label>
                            <select class="form-control">
                                <option>Bangalore</option>
                                <option>Pune</option>
                                <option>Delhi</option>
                            </select>

                        </div>
                        <div class="form-group">
                            <label class="form-check-label" for="exampleCheck1">Area/Village</label>
                            <select class="form-control">
                                <option>Koramangala</option>
                                <option>Indira Nagar</option>
                                <option>Brigade Road</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Show People</button>
                    </form>
                </div>
                <div className="people-list-grid">
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Free/Paid</th>
                                <th scope="col" className="only-desktop">Service Type</th>
                                <th scope="col" className="only-desktop">City</th>
                                <th scope="col" className="only-desktop">Area</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sujith</td>
                                <td><a href="tel:7406094832">7406094832</a><a className="btn btn btn-default btn-sm only-desktop">Copy</a>
                                <a className="btn btn-primary btn-sm only-mobile" href="tel:7406094832">Call</a>

                                </td>
                                <td>Free</td>
                                <td className="only-desktop">Car Mechanic</td>
                                <td className="only-desktop">Koramangala</td>
                                <td className="only-desktop">Bangalore</td>
                            </tr>
                            <tr>
                                <td>Ajai</td>
                                <td><a href="tel:7406094832">7406094832</a><a className="btn btn-default btn-sm only-desktop" >Copy</a>
                                <a className="btn btn-primary btn-sm only-mobile" href="tel:7406094832">Call</a>
                             
                                </td>
                                <td>Paid</td>
                                <td className="only-desktop">Car Mechanic</td>
                                <td className="only-desktop">Indira Nagar</td>
                                <td className="only-desktop">Bangalore</td>
                            </tr>
                            <tr>
                                <td>Ajesh</td>
                                <td><a href="tel:7406094832">7406094832</a><a className="btn btn btn-default btn-sm only-desktop" >Copy</a>
                                <a className="btn btn-primary btn-sm only-mobile" href="tel:7406094832">Call</a>
                                
                                </td>
                                <td>Free</td>
                                <td className="only-desktop">Car Mechanic</td>
                                <td className="only-desktop">Mg Raod</td>
                                <td className="only-desktop">Bangalore</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default NeedServicePeopleListing; 