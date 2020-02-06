import React, { useContext } from 'react';

import LocalContext from '../../context';


const select = ({ changeCurrency, options }) => {

    const localContext = useContext(LocalContext);

    return (
        <div className="form-group">
            <select className="form-control" onChange={ localContext.changeCurrency }>
            {
               options.map(option => <option value={option[0]} key={option[1]}>{option[1]}</option>) 
            } 
            </select>
        </div>
    );
}

export default select;