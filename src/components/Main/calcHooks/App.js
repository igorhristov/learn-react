import React, { useState } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';

const sanitizeDisplayValue = val => {
    return val.replace(/^(0+)([1-9]+)(.*)?/, '$2$3').replace(/^([0-9]+)(\.)+(.*)?/, '$1.$3');
};

const calculate = (op1, op2, operator) => {
    switch (operator) {
        case '×':
            return op1 * op2;
        case '÷':
            return (op1 / op2).toFixed(4);
        case '+':
            return op1 + op2;
        case '-':
            return op1 - op2;
        default:
            return 0;
    }
};

const App = () => {
    const [stack, setStack] = useState([]);
    const [displayValue, setDisplayValue] = useState('0');

    const handleKey = key => {
        switch (key) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                if (!displayValue) {
                    setDisplayValue(sanitizeDisplayValue('0' + key));
                } else {
                    const val =
                        key === '.' && displayValue.includes('.')
                            ? displayValue
                            : displayValue + key;

                    setDisplayValue(sanitizeDisplayValue(val));
                }

                break;

            case '×':
            case '÷':
            case '+':
            case '-':
            case '=':
                const [op1, operator] = stack;
                const op2 = Number(displayValue);

                const operand = op1 && operator ? calculate(op1, op2, operator) : op2;

                setStack([operand, key === '=' ? operator : key]);
                setDisplayValue(null);

                break;

            case '+/-':
                setDisplayValue(displayValue * -1);

                break;

            case '%':
                setDisplayValue(displayValue / 100);

                break;

            case 'AC':
                setStack([]);
                setDisplayValue();
                break;

            default:
        }
    };

    return (
        <div className='calculator'>
            <Display value={displayValue} stack={stack} />
            <Keypad handleKey={handleKey} />
        </div>
    );
};

export default App;
