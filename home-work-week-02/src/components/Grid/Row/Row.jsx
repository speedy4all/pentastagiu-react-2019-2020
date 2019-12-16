import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const row = props => {

    return (
        <div className="row">
        {
            props.children
        }
        </div>
    );
}

export default row;