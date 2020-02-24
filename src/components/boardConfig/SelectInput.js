import React from "react";

class SelectInput extends React.Component {
  onFieldChange = event => {
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
        <select
          className="formInput"
          id={this.props.name + this.props.index}
          value={this.props.value}
          onChange={this.onFieldChange}
          style={this.props.style}
        >
          <option hidden disabled>
            Choose column type
          </option>
          {this.props.valueArray.map(value => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}

export default SelectInput;
