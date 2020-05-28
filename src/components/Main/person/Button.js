import React from 'react';

class Button extends React.Component {

    render() {
        return (
            <button
                className={this.props.classname}
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

// function Button(props) {
//     return (
//         <button className='btn btn-primary' onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }


  
export default Button;
