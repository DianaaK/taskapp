import React from "react";
import TableInput from "./TableInput";
import SelectInput from "./SelectInput";
import DeleteButton from "./DeleteButton";

class TaskRow extends React.Component {
  render() {
    const styles =
      this.props.index % 2 === 0 ? { backgroundColor: "#f2f2f2" } : null;
    return (
      <div className="row">
        <div className="cell" style={{ minWidth: "80px", ...styles }}>
          <DeleteButton
            classname="deleteRow"
            deleteId={this.props.task.id}
            deleteRow={this.props.deleteRow}
          />
        </div>
        {this.props.columns.map((column, index) => {
          switch (column.type) {
            case "select":
              return (
                <div key={index} className="cell" style={{ ...styles }}>
                  <SelectInput
                    value={this.props.task[column.key] || "Change this"}
                    valueArray={column.options}
                    inputChange={this.props.taskInputChange(
                      this.props.task.id,
                      column.id
                    )}
                    style={{ ...styles }}
                  />
                </div>
              );
            case "input":
              return (
                <div
                  key={index}
                  className="cell"
                  style={{ minWidth: column.width }}
                >
                  <TableInput
                    value={this.props.task[column.key]}
                    inputChange={this.props.taskInputChange(
                      this.props.task.id,
                      column.id
                    )}
                    type={column.inputType}
                    style={{ ...styles }}
                  />
                </div>
              );
            case "id":
              return (
                <div
                  className="cell label"
                  key={index}
                  style={{ minWidth: column.width, ...styles }}
                >
                  <label className="label">{this.props.task[column.key]}</label>
                </div>
              );
            default:
              return <div className="cell" />;
          }
        })}
      </div>
    );
  }
}

export default TaskRow;
