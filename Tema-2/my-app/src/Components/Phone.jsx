import React from 'react';


export class Phone extends React.Component {

    constructor(props){
        super(props)
    }
    render(){
        return(<div className="phone-item">
                 <span>{this.props.name}</span>
                 <span>Memory:{this.props.memory}</span>
                 <span>Storage:{this.props.storage}</span>
                 <span>Pret:{this.props.price}</span>
                 <span>{this.props.state ? this.props.state : "resigilat"}</span>
                 <button>Add to cart</button>

        </div>)
    }

}