import React from "react";
import FormInput from "./FormInput";

import Button from "@material-ui/core/Button";

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
    this.props.optionButtonClicked(this.state.option);
    this.setState(state => ({
      ...state,
      option: ""
    }));
  };

  render() {
    return (
      <div id="optionDetails">
        <FormInput
          name="Options:"
          type="text"
          value={this.state.option}
          inputChange={this.handleChange}
        />
        <button className="optionButton" onClick={this.handleAddOption}>
          Add option
        </button>
        {/* <Button variant="contained" size="small">
          Add option
        </Button> */}
        {this.props.options.map(option =>
          option ? (
            <li className="optionListItem" key={option}>
              {option}
            </li>
          ) : (
            ""
          )
        )}
      </div>
    );
  }
}

export default OptionInput;
