import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Input = props => {
    
    return (
        <div className="form-group">
            <label>{props.label}:</label>
            <input 
                type={props.type} 
                className="form-control" 
                placeholder={props.placeholder} 
                value={props.inputValue}
                onChange={ props.change }
            />
        </div>
    );
}

export default Input;