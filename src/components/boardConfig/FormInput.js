import React from "react";

class FormInput extends React.Component {
  handleTextChange = event => {
    this.props.inputChange(event.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <label
          className="formLabel"
          htmlFor={this.props.name + this.props.index}
        >
          {this.props.name}
        </label>
        <input
          className="formInput"
          id={this.props.name + this.props.index}
          type={this.props.type}
          value={this.props.value}
          onChange={this.handleTextChange}
        ></input>
      </React.Fragment>
    );
  }
}

export default FormInput;
