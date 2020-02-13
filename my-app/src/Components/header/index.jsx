import React, { PureComponent } from "react";

export class Header extends PureComponent {
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </>
    );
  }
}
