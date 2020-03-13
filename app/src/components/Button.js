import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handleLatinButton(this.props.letter);
  }

  render() {
    const buttonStyle = {
      display: "inline-flex",
      margin: "0px",
      borderRadius: "0",
      boxShadow: "none !important",
      border: "none",
      padding: "5px 12px",
      display: "inline-block",
      textAlign: "center",
      verticalAlign: "middle",
      userSelect: "none",
      fontSize: "1.1rem",
      margin: 2
    };

    return (
      <button
        style={buttonStyle}
        className="btn btn-secondary"
        onClick={this.onClick}
      >
        {this.props.letter}
      </button>
    );
  }
}

export default Button;
