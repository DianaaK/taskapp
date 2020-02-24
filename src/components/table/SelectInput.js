import React from "react";

class SelectInput extends React.Component {
  onFieldChange = event => {
    this.props.inputChange(event.target.value);
  };

  render() {
    return (
      <select
        value={this.props.value}
        onChange={this.onFieldChange}
        style={this.props.style}
      >
        <option hidden disabled>
          Change this
        </option>
        {this.props.valueArray.map(value => (
          <option key={value}>{value}</option>
        ))}
      </select>
    );
  }
}

export default SelectInput;
