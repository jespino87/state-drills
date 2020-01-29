import React from "react";

class HelloWorld extends React.Component {
  // Setting the initial state
  state = { who: "world" };
  render() {
    return (
      <div>
        <button onClick={() => this.setWho("world")}>world </button>
        <button onClick={() => this.setWho("friend")}>friend</button>
        <button onClick={() => this.setWho("react")}>react </button>
        <p> Hello, {this.state.who} </p>{" "}
      </div>
    );
  }
  setWho = who => {
    // State is updated using setState
    this.setState({
      who
    });
  };
}
export default HelloWorld;
