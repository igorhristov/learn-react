import React from 'react';

// class Square extends React.Component {

//     render() {
//         return (
//             <button
//                 className='square btn btn-outline-success btn-lg'
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

const Square = ({ onClick, value }) => (
    <button className='square' onClick={onClick}>
        {value}
    </button>
);

export default Square;
