import React, { Component } from 'react';
import * as math from 'mathjs';
import CalcBody from './CalcButtons';
import Ekran from './Ekran';

class Kalkulator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleClick);
    }

    handleReset() {
        this.setState({
            result: 0,
        });
    }

    handleDelete(e) {
        let arrow = this.state.result.split('');
        arrow.pop();
        arrow = arrow.join('');
        this.setState({ result: arrow });
    }

    handleEqual(e) {
        if (isNaN(this.state.result[this.state.result.length - 1])) {
            this.setState({ result: this.state.result });
        } else {
            this.setState({ result: math.evaluate(this.state.result) });
        }
    }

    handleClick(e) {
        if (e === 'Backspace' || e.key === 'Backspace') {
            this.handleDelete();
        } else if (e === 'C' || e.key === 'Delete') {
            this.handleReset();
        } else if (e === '=' || e.key === 'Enter') {
            this.handleEqual();
        } else if (
            e.key === '0' ||
            e.key === '1' ||
            e.key === '2' ||
            e.key === '3' ||
            e.key === '4' ||
            e.key === '5' ||
            e.key === '6' ||
            e.key === '7' ||
            e.key === '8' ||
            e.key === '9' ||
            e.key === '.' ||
            e.key === '+' ||
            e.key === '-' ||
            e.key === '*' ||
            e.key === '/' ||
            e
        ) {
            e.key
                ? this.setState({
                      result: this.state.result + e.key,
                  })
                : this.setState({
                      result: this.state.result + e,
                  });
        }
    }

    render() {
        return (
            <div className='shadow bg-warning p-2 my-5'>
                <Ekran rezultat={this.state.result} />
                <CalcBody handleClick={this.handleClick} />
            </div>
        );
    }
}

export default Kalkulator;
