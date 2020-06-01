import React from 'react';
import style from './style.css'

class CalcButtons extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <button name='C' onClick={e => this.props.handleClick(e.target.name)}>
                        C
                    </button>
                    <button name='/' onClick={e => this.props.handleClick(e.target.name)}>
                        /
                    </button>
                    <button name='*' onClick={e => this.props.handleClick(e.target.name)}>
                        *
                    </button>
                    <button name='-' onClick={e => this.props.handleClick(e.target.name)}>
                        -
                    </button>
                </div>
                <div>
                    <button name='7' onClick={e => this.props.handleClick(e.target.name)}>
                        7
                    </button>
                    <button name='8' onClick={e => this.props.handleClick(e.target.name)}>
                        8
                    </button>
                    <button name='9' onClick={e => this.props.handleClick(e.target.name)}>
                        9
                    </button>
                    <button name='+' onClick={e => this.props.handleClick(e.target.name)}>
                        +
                    </button>
                </div>
                <div>
                    <button name='4' onClick={e => this.props.handleClick(e.target.name)}>
                        4
                    </button>
                    <button name='5' onClick={e => this.props.handleClick(e.target.name)}>
                        5
                    </button>
                    <button name='6' onClick={e => this.props.handleClick(e.target.name)}>
                        6
                    </button>
                    <button name='+' onClick={e => this.props.handleClick(e.target.name)}>
                        +
                    </button>
                    <div>
                        <button name='1' onClick={e => this.props.handleClick(e.target.name)}>
                            1
                        </button>
                        <button name='2' onClick={e => this.props.handleClick(e.target.name)}>
                            2
                        </button>
                        <button name='3' onClick={e => this.props.handleClick(e.target.name)}>
                            3
                        </button>
                        <button name='=' onClick={e => this.props.handleClick(e.target.name)}>
                            =
                        </button>
                    </div>
                    <div>
                        <button name='0' onClick={e => this.props.handleClick(e.target.name)}>
                            0
                        </button>
                        <button name='.' onClick={e => this.props.handleClick(e.target.name)}>
                            .
                        </button>
                        <button name='Backspace' onClick={e => this.props.handleClick(e.target.name)}>
                            &larr;
                        </button>
                        <button name='=' onClick={e => this.props.handleClick(e.target.name)}>
                            =
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CalcButtons;
