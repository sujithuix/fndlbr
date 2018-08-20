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
                        <label for="exampleInputEmail1">Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Mobile (10 digits)</label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
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
                    <div class="form-group">
                        <label class="form-check-label" for="exampleCheck1">Type of service</label>
                        <select class="form-control">
                            <option>Service 1</option>
                            <option>Service 2</option>
                            <option>Service 3</option>
                        </select>
                        
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}

export default ProvideServicForm; 