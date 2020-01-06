import React from 'react';
export class Games extends React.Component {

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="videogames">
                <span>{this.props.name}</span>
                <span> | Price: {this.props.price}</span>
                <span> | Genre: {this.props.genre}</span>
                <span> | Multiplayer: {this.props.multiplayer ? this.props.multiplayer : "In development"}</span>
                <span> | Platform: {this.props.platform}</span>
                
                <button>Pre-Order</button>
            </div>
        );
    }
} 
