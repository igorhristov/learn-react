import React, { useEffect } from 'react';
import Key from './Key';
const keys = [
    {
        label: 'AC',
        type: 'function',
    },
    {
        label: '+/-',
        type: 'function',
    },
    {
        label: '%',
        type: 'function',
    },
    {
        label: '÷',
        type: 'operation',
    },

    {
        label: '7',
    },
    {
        label: '8',
    },
    {
        label: '9',
    },

    {
        label: '×',
        type: 'operation',
    },

    {
        label: '4',
    },
    {
        label: '5',
    },
    {
        label: '6',
    },
    {
        label: '+',
        type: 'operation',
    },
    {
        label: '1',
    },
    {
        label: '2',
    },
    {
        label: '3',
    },
    {
        label: '-',
        type: 'operation',
    },
    {
        label: '0',
    },
    {
        label: '.',
    },

    {
        label: '=',
        type: 'operation',
    },
];

const Keypad = ({ handleKey }) => {
    useEffect(() => {
        const keyPressHandler = e => {
            e.preventDefault();

            switch (e.key) {
                case '/':
                    handleKey('÷');
                    break;
                case '*':
                    handleKey('×');
                    break;

                case 'Enter':
                    handleKey('=');
                    break;

                default:
                    handleKey(e.key);
                    break;
            }
        };

        window.addEventListener('keypress', keyPressHandler);
        return () => {
            window.removeEventListener('keypress', keyPressHandler);
        };
    });

    return (
        <div className='keypad'>
            {keys.map(({ label, ...props }) => {
                return <Key key={label} label={label} {...props} handleKey={handleKey} />;
            })}
        </div>
    );
};

export default Keypad;
