import * as React from "react";
import Hover from "../Hover";
export class CartItem extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      count: 0,
      name: '',
    }
  }


  componentDidMount() {
    document.title= `count clicked ${this.state.count}`;
    console.log('CartItem', this.state.count)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    document.title= `count clicked ${this.state.count}`;
    console.log('componentDidUpdate', this.state.count, 'prevProps',prevProps)
  }

  render() {
    const { count, name } = this.state;
    return (
      <Hover>
        {isHover => {
          return (
            <div className={`cart-item ${isHover ? "hover" : ""}`}>
              <h1> count {count} </h1>
              <span>
                <b>{this.props.count}x</b> {this.props.provider} |{" "}
                {this.props.date}
              </span>
              <span>{this.props.price} RON</span>
              <span>Language: {this.props.language}</span>
              <span>
                <button onClick={() => this.props.add(this.props.itemId)}>
                  +
                </button>
                <button
                  onClick={() => this.props.decreaseCount(this.props.itemId)}
                >
                  -
                </button>
                <button onClick={() => this.props.remove(this.props.itemId)}>
                  X
                </button>
                <button onClick={() => this.setState({count: count+1})}>
                  Click count
                </button>
              </span>
            </div>
          );
        }}
      </Hover>
    );
  }
}
