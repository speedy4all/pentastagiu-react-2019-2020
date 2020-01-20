import * as React from "react";

export class Header extends React.PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   if(nextProps.title !== this.props.title ||
  //      nextProps.subtitle !== this.props.subtitle) return true;
  //   return false;

  // };
  componentDidUpdate() {
    console.log("randare header");
  }
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </>
    );
  }
}
