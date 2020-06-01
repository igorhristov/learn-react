import React from 'react';

const Ekran = props => (
    <div
        style={{ height: '50px', 'font-size': '30px' }}
        className='text-right font-weight-bolder text-monospace bg-dark text-info pr-2'
    >
        {props.rezultat}
    </div>
);

export default Ekran;
