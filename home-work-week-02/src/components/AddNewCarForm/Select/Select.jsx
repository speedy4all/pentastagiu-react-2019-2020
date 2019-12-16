import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Select = props => {

    return (
        <div className="form-group">
            <label>{props.label}:</label>
            <select 
                className="form-control"
                onChange={ props.change }
            >
                {
                    props.options.map(opt => <option key={opt.id} value={opt.class}>{opt.name}</option>)
                }
            </select>
        </div>
    );
}

export default Select;