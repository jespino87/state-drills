import React from "react";

class RouletteGun extends React.Component {
  // Component should render a div element
  state = { 
    chamber: null, 
    spinningTheChamber: false 
  };

  render() {
    let display = this.state.spinningTheChamber
      ? "spinning The Chamber and Pulling the trigger!"
      : this.state.chamber === this.props.bulletInChamber
      ? "BANG"
      : "Your safe!";
    return (
      <div>
        <button onClick={this.handleClick}>Pull the trigger</button>
        <p>{display}</p>
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true
    });
    this.timeout = setTimeout(() => {
      let randomChamber = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false
      });
    }, 2000);
  };
  
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
}

export default RouletteGun;
