import React from 'react';
export class Movies extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="movies-item">
                <span>{this.props.name}</span>
                <span> | Price: {this.props.price}</span>
                <span> | Time: {this.props.time}</span>
                <span> | Type: {this.props.type ? this.props.type : "Information missing."}</span>
                <span> | Director:{this.props.director  ? this.props.director : " Information missing."}</span>
                
                <button>Add to cart</button>
            </div>
        );
    }
} 