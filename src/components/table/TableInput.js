import React from "react";

class TableInput extends React.Component {
  onFieldChange = event => {
    this.props.inputChange(event.target.value);
  };

  onFieldClick = event => {
    event.stopPropagation();
  };

  render() {
    return (
      <input
        type={this.props.type}
        value={this.props.value}
        onChange={this.onFieldChange}
        onClick={this.onFieldClick}
        style={this.props.style}
      ></input>
    );
  }
}

export default TableInput;
