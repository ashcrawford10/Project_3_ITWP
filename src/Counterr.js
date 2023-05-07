import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.tick = this.tick.bind(this); 
  }

  tick() {

    this.interval = setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
        <br />
        <button onClick={this.tick}> Start </button>
      </div>
    );
  }
}

  export default Timer;