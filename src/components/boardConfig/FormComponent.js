import React from "react";
import FormInput from "./FormInput";
import ColumnDetails from "./ColumnDetails";

// import TextField from "@material-ui/core/TextField";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      columns: props.columns
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
    let id = i === 0 ? 0 : newColumns[newColumns.length - 1].id + 1;
    while (i < value) {
      newColumns.push({ id: id++ });
      i++;
    }
    this.setState(state => ({
      ...state,
      columns: newColumns
    }));
  };

  handleColumnName = columnId => value => {
    this.setState(state => ({
      ...state,
      columns: state.columns.map(column => {
        if (column.id === columnId) {
          column.label = value;
          column.key = value;
        }
        return column;
      })
    }));
  };

  handleSelect = columnId => value => {
    this.setState(state => ({
      ...state,
      columns: state.columns.map(column => {
        if (column.id === columnId) {
          column.type = value;
        }
        return column;
      })
    }));
  };

  handleDeleteColumn = columnId => {
    const columns = this.state.columns.filter(column => column.id !== columnId);
    this.setState(state => ({
      ...state,
      columns
    }));
  };

  handleOptionButtonClicked = columnId => value => {
    this.setState(state => ({
      ...state,
      columns: state.columns.map(column => {
        if (column.id === columnId) {
          let newArray = column.options || [];
          newArray.push(value);
          column.options = newArray;
        }
        return column;
      })
    }));
  };

  handleClearButtonClicked = columnId => {
    this.setState(state => ({
      ...state,
      columns: state.columns.map(column => {
        if (column.id === columnId) {
          column.options = [];
        }
        return column;
      })
    }));
  };

  render() {
    const { title, columns } = this.state;
    console.log(title, columns);
    return (
      <div id="boardConfiguration">
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
              <ColumnDetails
                key={index}
                column={column}
                handleColumnName={this.handleColumnName}
                handleSelect={this.handleSelect}
                handleOptionButtonClicked={this.handleOptionButtonClicked}
                handleClearButtonClicked={this.handleClearButtonClicked}
                handleDeleteColumn={this.handleDeleteColumn}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default FormComponent;
