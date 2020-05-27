import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8'>
                        {this.props.firstName} {this.props.lastName}, age: {this.props.age}
                    </div>

                    <button onClick={() => this.props.onClick()} className='btn btn-danger'>
                        {this.props.value}
                    </button>
                </div>
            </div>
        );
    }
}

export default Person;
