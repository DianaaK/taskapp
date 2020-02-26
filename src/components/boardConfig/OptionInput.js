import React from "react";
import FormInput from "./FormInput";

class OptionInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: ""
    };
  }

  handleChange = value => {
    this.setState(state => ({
      ...state,
      option: value
    }));
  };

  handleAddOption = () => {
    if (this.state.option) {
      this.props.optionButtonClicked(this.state.option);
      this.setState(state => ({
        ...state,
        option: ""
      }));
    }
  };

  handleClearOptions = () => {
    this.props.handleClearButtonClicked(this.props.columnId);
  };

  render() {
    return (
      <div id="optionDetails">
        <FormInput
          name="Options:"
          type="text"
          value={this.state.option}
          inputChange={this.handleChange}
          columnId={this.props.columnId}
        />
        <button className="optionButton" onClick={this.handleAddOption}>
          Add option
        </button>
        {this.props.options.map(option =>
          option ? (
            <li className="optionListItem" key={option}>
              {option}
            </li>
          ) : (
            ""
          )
        )}
        {this.props.options.length > 0 ? (
          <div>
            <button className="clearButton" onClick={this.handleClearOptions}>
              Clear options
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default OptionInput;
