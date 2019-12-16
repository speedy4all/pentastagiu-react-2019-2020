import React from 'react';


const Car = props => {

    return (
        <div 
            className={'card text-white bg-' + props.color} 
            style={{marginBottom: '20px'}}
        >
            <div className="card-body">
                {
                    props.children
                }
                <p className="card-text"><b>Mark: </b> {props.mark ? props.mark : 'Does not exist'}</p>
                <p className="card-text"><b>Model: </b> {props.model ? props.model : 'Does not exist'}</p>
                <p className="card-text"><b>Engine: </b> {props.engine ? props.engine : 'Does not exist'}</p>
                <p className="card-text"><b>Price: </b> {props.price ? props.price : 'Does not exist'}</p>
            </div>
        </div>
    );
}

export default Car;