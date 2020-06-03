import React from 'react';

const Key = ({ label, type, handleKey }) => {
    const cls =
        'key' + type === 'function'
            ? 'key-function'
            : type === 'operation'
            ? 'key-operation'
            : label === '0'
            ? 'key-0'
            : '';
    return (
        <button className={'key ' + cls} onClick={() => handleKey(label)} type='button'>
            {label}
        </button>
    );
};

export default Key;
