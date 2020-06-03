import React from 'react';

const Display = ({ value, stack }) => {
    const [result] = stack;
    const displayValue = value || (result && result.toString()) || '0';
    return <div className='display'>{displayValue}</div>;
};

export default Display;
