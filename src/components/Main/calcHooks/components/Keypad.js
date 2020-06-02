import React from 'react';
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

const Keypad = () => {
    return (
        <div className='keypad'>
            {keys.map(({ label, ...props }) => {
                return <Key key={label} label={label} {...props} />;
            })}
        </div>
    );
};

export default Keypad;
