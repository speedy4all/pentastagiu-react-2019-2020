import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const column = props => {
    return (
        <div className={props.cssClass}>
        {
            props.children
        }
        </div>
    );
}

export default column;