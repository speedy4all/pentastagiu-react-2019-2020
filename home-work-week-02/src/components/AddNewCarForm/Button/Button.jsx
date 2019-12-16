import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Button = props => {

    return (
        <button 
            type={props.type} 
            className={props.cssClass}
            style={ props.inlineCss ? props.inlineCss : null }
            onClick={ props.clicked }
        >
            {props.children}
        </button>
    );
}

export default Button;