import React from "react";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import OptionInput from "./OptionInput";

import TextField from "@material-ui/core/TextField";

class ConfigForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      columns: []
    };
  }

  handleTitle = value => {
    this.setState(state => ({
      ...state,
      title: value
    }));
  };

  handleColumns = value => {
    let newColumns = this.state.columns;
    let i = newColumns.length;
    while (i < value) {
      newColumns.push({ id: i++ });
    }
    this.setState(state => ({
      ...state,
      columns: newColumns
    }));
  };

  handleColumnName = index => value => {
    this.setState(state => ({
      ...state,
      columns: state.columns.map(column => {
        if (column.id === index) {
          column.label = value;
          column.key = value;
        }
        return column;
      })
    }));
  };

  handleSelect = index => value => {
    this.setState(state => ({
      ...state,
      columns: state.columns.map(column => {
        if (column.id === index) {
          column.type = value;
        }
        return column;
      })
    }));
  };

  handleDeleteColumn = event => {
    const index = event.target.name;
    this.setState(state => ({
      ...state,
      columns: state.columns.filter(column => column.id !== parseInt(index))
    }));
  };

  handleOptionButtonClicked = index => value => {
    this.setState(state => ({
      ...state,
      columns: state.columns.map(column => {
        if (column.id === index) {
          let newArray = column.options || [];
          newArray.push(value);
          column.options = newArray;
        }
        return column;
      })
    }));
  };

  render() {
    const { title, columns } = this.state;
    // console.log(this.state);
    const columnTypeOptions = ["date", "number", "select", "text"];
    return (
      <div>
        <div id="boardDetails">
          {/* <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Number of columns"
            type="number"
            variant="outlined"
            size="small"
          /> */}

          <FormInput
            name="Title:"
            type="text"
            value={title}
            inputChange={this.handleTitle}
          />
          <FormInput
            name="Number of columns:"
            type="number"
            value={columns.length}
            inputChange={this.handleColumns}
          />
        </div>
        <div id="columnDetails">
          {columns.map((column, index) => {
            return (
              <div key={index}>
                <button name={index} onClick={this.handleDeleteColumn}>
                  x
                </button>
                <FormInput
                  name="Column name:"
                  type="text"
                  value={columns.find(column => column.id === index).name}
                  inputChange={this.handleColumnName(index)}
                  index={index}
                />
                <SelectInput
                  name="Column type:"
                  value={
                    columns.find(column => column.id === index).type ||
                    "Choose column type"
                  }
                  valueArray={columnTypeOptions}
                  inputChange={this.handleSelect(index)}
                  index={index}
                />
                {columns.find(column => column.id === index).type !==
                "select" ? (
                  ""
                ) : (
                  <OptionInput
                    optionButtonClicked={this.handleOptionButtonClicked(index)}
                    options={column.options || []}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ConfigForm;
