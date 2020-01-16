import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



export default class Car extends React.Component{
    constructor (props){
        super(props);
    }

    render(){
        return (

    <>
          <Card  style={{ width: '18rem' }}>
              <Card.Img variant="top" src= {this.props.img} />
              <Card.Body>
                <Card.Title><h1> {this.props.name} </h1></Card.Title>
                <Card.Text>
     
                  <h3> Color: {this.props.color}</h3>
                  <h3> Year: {this.props.year ? this.props.year :"not listed"} </h3>
                </Card.Text>
              </Card.Body>
          </Card>

      <br />    
    </>       
        );
    }
}