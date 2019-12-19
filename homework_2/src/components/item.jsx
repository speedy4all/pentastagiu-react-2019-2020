import React from 'react';

export default class Item extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        let percentage = (x,y) => Math.floor((x/y)*100);
        return(
        <div className = "list-item">
            <div className = "photo"></div>
            <div className = "description">{this.props.name}</div>
            <div className = "old-price">
                <s>{this.props.oldPrice ? this.props.oldPrice+" RON": "Nu exista"}</s>
                <span>{this.props.oldPrice ? percentage(this.props.newPrice, this.props.oldPrice)+"%" : " "}</span>
            </div>
            <div className = "price">{this.props.newPrice}
                <sup>{this.props.zecimal?this.props.zecimal:" "}</sup>RON
            </div>
            <button className = "submit-button">Adauga in cos</button>
        </div>
        );
    }
}