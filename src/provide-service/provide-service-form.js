import React, { Component } from 'react';

class ProvideServicForm extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="provide-service-form">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Your Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Your Mobile number(10 digits)</label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Mobile Number" />
                    </div>
                    <div class="form-group">
                        <label class="form-check-label" for="exampleCheck1">In which City you work</label>
                        <select class="form-control">
                            <option>Bangalore</option>
                            <option>Pune</option>
                            <option>Delhi</option>
                        </select>
                        
                    </div>
                    <div class="form-group">
                        <label class="form-check-label" for="exampleCheck1">In which Area/Village you work</label>
                        <select class="form-control">
                            <option>Koramangala</option>
                            <option>Indira Nagar</option>
                            <option>Brigade Road</option>
                        </select>
                        
                    </div>
                    <div class="form-group">
                        <label class="form-check-label" for="exampleCheck1">What work you do</label>
                        <select class="form-control">
                            <option>Plumber</option>
                            <option>Electrician</option>
                            <option>House/Office Cleaning</option>
                            <option>Painting</option>
                            <option>Repair Electronic devices (TV,Fridge etc)</option>
                            <option>Car/Bike Mechanic</option>
                            <option>Furniture Repair</option>
                        </select>
                        
                    </div>
                    <div class="form-group">
                        <label class="form-check-label" for="exampleCheck1">You provide free or paid service</label>
                        <select class="form-control">
                            <option>Paid</option>
                            <option>Free</option>
                        </select>
                        
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}

export default ProvideServicForm; 