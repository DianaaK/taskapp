import React from "react";
import SelectInput from "./SelectInput";
import OptionInput from "./OptionInput";
import FormInput from "./FormInput";

class ColumnDetails extends React.Component {
  handleDeleteButtonClicked = () => {
    this.props.handleDeleteColumn(this.props.column.id);
  };

  render() {
    const columnTypeOptions = ["date", "number", "select", "text"];
    return (
      <div>
        <button onClick={this.handleDeleteButtonClicked}>x</button>
        <FormInput
          name="Column name:"
          type="text"
          value={this.props.column.label}
          inputChange={this.props.handleColumnName(this.props.column.id)}
          columnId={this.props.column.id}
        />
        <SelectInput
          name="Column type:"
          value={this.props.column.type || "Choose column type"}
          valueArray={columnTypeOptions}
          inputChange={this.props.handleSelect(this.props.column.id)}
          columnId={this.props.column.id}
        />
        {this.props.column.type !== "select" ? (
          ""
        ) : (
          <OptionInput
            optionButtonClicked={this.props.handleOptionButtonClicked(
              this.props.column.id
            )}
            handleClearButtonClicked={this.props.handleClearButtonClicked}
            options={this.props.column.options || []}
            columnId={this.props.column.id}
          />
        )}
      </div>
    );
  }
}

export default ColumnDetails;
