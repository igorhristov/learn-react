import React from 'react';

const Button = ({ cssclass, onClick, value }) => (
    <button className={cssclass} onClick={onClick}>
        {value}
    </button>
);

export default Button;
