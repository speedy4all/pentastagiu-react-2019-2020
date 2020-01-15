import React from 'react';
export class Mountain extends React.Component{
 /*   constructor(props) {
        super(props);
    }*/
    render() {
        return(
        <div className="mountain-item">
          <span>Peak: {this.props.peak}</span>
          <span>Mountains: {this.props.mountain}</span>
          <span>County: {this.props.county}</span>
          <span>Height: {this.props.height}m</span>
          <span>Cottage: {this.props.cottage ? this.props.cottage : "There is no cottage!"}</span>
          <button>Get the trip</button>
        </div>    
        );
    }
}
     