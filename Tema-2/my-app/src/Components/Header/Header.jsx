import * as React from 'react';




export class Header extends React.Component {
    
    render(){
        return(<div className="header">
              <h1>{this.props.title}</h1> 
              <h5>{this.props.subtitle}</h5>
        </div>)
    }


} 