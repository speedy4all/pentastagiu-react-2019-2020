import React from 'react';



export default class ButtonHover extends React.Component{
    state = {isHover:false}
    hoverIn = () => this.setState({isHover:true});
    hoverOut = () => this.setState({isHover:false});

    render(){
        return (
        <div 
        onMouseOver={this.hoverIn} 
        onMouseOut={this.hoverOut}> 
        {this.props.render(this.state.isHover)}
        </div>
        );
    }
}