import React from "react";

class Bomb extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.count < 8) {
        this.setState({
          count: this.state.count + 1
        });
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let word =
      this.state.count < 8
        ? this.state.count % 2 === 0
          ? "tick"
          : "tock"
        : "BOOM!!!!";
    return (
      <div>
        <p>{word}</p>
      </div>
    );
  }
}

export default Bomb;
