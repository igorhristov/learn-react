import React, { Component } from 'react';

class Person extends Component {
   
    render() {
        return (
                <h4 >
                    {this.props.firstName}{' '}
                    {this.props.lastName},
                    age: {this.props.age}
                </h4>
                
        );
    }
}

export default Person;
