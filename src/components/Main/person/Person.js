import React, { Component } from 'react';
import Button from './Button';

class Person extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-7'>
                        {this.props.firstName} {this.props.lastName}, age: {this.props.age}
                    </div>

                    <div className='col-5'>
                    <Button
                        classname='btn btn-lg btn-warning'
                        value='Edit'
                        onClick={() => this.props.handleEditPerson()}
                    />


                    <Button
                        classname='btn btn-lg btn-danger mx-2'
                        value='X'
                        onClick={() => this.props.handleDeletePerson()}
                    />
                    </div>

                </div>
            </div>
        );
    }
}

export default Person;
