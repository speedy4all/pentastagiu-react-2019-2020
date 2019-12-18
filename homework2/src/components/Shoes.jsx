import React from 'react';
export class Shoes extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="shoes-item">
                <span>{this.props.name}</span>
                <span>{this.props.description ? this.props.description : "alte materiale"}</span>
                <span>Pret: {this.props.price}</span>
                <span>Marime: {this.props.size}</span>
                <span>Culoare: {this.props.color}</span>
                <button>Adauga in cos</button>
            </div>
        );
    }
}