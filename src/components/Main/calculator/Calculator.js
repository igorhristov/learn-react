import React, { Component } from 'react';
import * as math from 'mathjs';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: 0,
            numbers: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.', 'C'],
            operators: ['+', '-', '*', '/', '='],
            equations: '',
        };
    }
    handleNumberClick = num => {
        if (num === 'C') {
            this.setState({ result: 0, equations: '' });
        } else if (num === '.') {
            this.setState({
                equations:
                    this.state.equations.slice(-1) === '.' ||
                    this.state.equations.split('').includes(num)
                        ? this.state.equations
                        : this.state.equations + num,
            });
        } else {
            this.setState({ equations: this.state.equations + num });
        }
    };

    handleOperatorClick = operator => {
        if (operator === '=') {
            !['+', '-', '*', '/', '.'].includes(this.state.equations.slice(-1))
                ? this.setState({ result: math.evaluate(this.state.equations), equations: '' })
                : this.setState({result:  0});
        } else if (this.state.equations.slice(-1) === '.') {
            this.setState({ equations: this.state.equations });
        } else if (operator) {
            this.setState({
                equations:
                    this.state.equations.slice(-1) !== operator
                        ? this.state.equations + operator
                        : this.state.equations,
            });
        } else {
            this.setState({ equations: this.state.equations + operator });
        }
    };

    render() {
        return (
            <div className='mx-5 border border-dark px-3 bg-secondary shadow mb-5'>
                <h3
                    className='text-light bg-dark p-2 text-right mb-0 pr-3 rounded-top mb-0'
                    style={{ height: '40px' }}
                >
                    {this.state.result}
                </h3>
                <h4 className='text-muted bg-dark p-2 text-right my-0' style={{ height: '40px' }}>
                    {this.state.equations}
                </h4>
                <div className='row'>
                    <div className='col-9 m-0 p-0'>
                        {this.state.numbers.map((number, ix) => {
                            return (
                                <button
                                    className='col-4 btn btn-secondary font-weight-bold border border-dark btn-lg'
                                    onClick={() => this.handleNumberClick(number)}
                                    key={ix}
                                >
                                    {number}
                                </button>
                            );
                        })}
                    </div>
                    <div className='col-3 m-0 p-0'>
                        {this.state.operators.map((operator, ix) => {
                            return (
                                <button
                                    className='col-12 btn btn-danger font-weight-bold border border-dark btn-lg'
                                    key={ix}
                                    onClick={() => this.handleOperatorClick(operator)}
                                >
                                    {operator}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
