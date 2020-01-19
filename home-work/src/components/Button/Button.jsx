import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const button = props => {

    return (
        <button 
            type="button" 
            className={ 'btn btn-sm btn-outline-' + props.btnType }
            onClick={props.onClickHandler}
        >
            { props.children }
        </button>
    );
}

export default button;