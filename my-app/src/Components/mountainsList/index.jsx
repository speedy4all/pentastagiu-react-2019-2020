import React, { Component } from "react";
import { Mountain } from "../mountains";
import { AppContext } from "../../Context/context";

export default class MountainList extends Component {
  static contextType = AppContext;
  handleClick = () => {
    const {history} = this.props;
    history.push('/home');
  };
  render() {
    console.log(this.props);
    return (
      <div className="mountains-container">
        {this.context.mountains.map(mountain => (
        <Mountain
          key={mountain.id}
          itemId={mountain.id}
          {...mountain}
          // peak={mountain.peak}
          // mountain={mountain.mountain}
          // county={mountain.county}
          // height={mountain.height}
          // cottage={mountain.cottage}
        />
        ))}
        <button onClick={this.handleClick}>Go to Home</button>
      </div>
    );
  }
}
