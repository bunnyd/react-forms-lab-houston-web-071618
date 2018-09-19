import React from "react";
import App from "../App";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={event => this.setState({ message: event.target.value })}
          value={this.state.message}
        />
      </div>
    );
  }
}

export default TwitterMessage;
