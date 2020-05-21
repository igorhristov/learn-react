import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);

        this.state = { blah: 0 };
    }
    render() {
        return (
            <div>
                <p>
                    {this.props.firstName},{this.props.lastName},{this.props.age}
                </p>
            </div>
        );
    }
}

export default Person;
