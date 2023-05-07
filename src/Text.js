import React, { Component } from "react";

class Text extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }

  render() {
    return (
      <div>
        <label>Enter Text : </label>
        <textarea
          value={this.state.textAreaValue}
          onChange={this.handleChange}
          rows={5}
          cols={50}
        />
      </div>
    );
  }
}

export default Text;