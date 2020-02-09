import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Select from '../Select/Select';
import * as list from '../../store';


const settings = () => {

    return (
        <div className="row">
            <div className="col-md-6">
                <label>Set Currency:</label>
                <Select options={list.currency} />
            </div>
            <div className="col-md-6"></div>
        </div>
        
    );
}

export default settings;