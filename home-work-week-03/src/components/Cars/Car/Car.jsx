import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const car = props => {

    const style = {
        display: 'inline-block',
        width: '25px',
        height: '25px'
    }

    return (
        <tr>
            <td>{ props.id }</td>
            <td>{ props.mark }</td>
            <td>{ props.model }</td>
            <td>
                <span className="rounded-circle" style={ { ...style, backgroundColor: props.color } }></span>
            </td>
            <td>{ props.price }</td>
        </tr>
    );
}

export default car;