import React from "react";
import "../../style.css";
import SiteHeader from "./SiteHeader";
import ActionBar from "./ActionBar";
import TableComponent from "./TableComponent";
import reduxContainer from "../../redux/reduxContainer";
import { actions } from "../../redux/actions";

class Site extends React.Component {
  taskInputChange = (id, key) => newValue => {
    this.props.taskChange(id, key, newValue);
  };

  headerInputChange = key => newValue => {
    this.props.headerChange(key, newValue);
  };

  deleteRow = rowId => {
    const board = this.props.board;
    this.props.deleteRow(rowId, board.tasks);
  };

  render() {
    const { board } = this.props;
    return (
      <div id="taskboard">
        <SiteHeader title={board.title} />
        <ActionBar
          board={board}
          addNewRow={this.props.addRow}
          addNewColumn={this.props.addColumn}
        />
        <TableComponent
          board={board}
          deleteRow={this.deleteRow}
          deleteColumn={this.props.deleteColumn}
          taskInputChange={this.taskInputChange}
          headerInputChange={this.headerInputChange}
          sortColumn={this.props.sortColumn}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: {
      title: state.title,
      columns: state.columns,
      tasks: state.tasks
    }
  };
}

const dispatchToProps = {
  addRow: actions.addRow,
  deleteRow: actions.deleteRow,
  addColumn: actions.addColumn,
  deleteColumn: actions.deleteColumn,
  sortColumn: actions.sortColumn,
  taskChange: actions.taskChange,
  headerChange: actions.headerChange
};

export default reduxContainer(Site, mapStateToProps, dispatchToProps);
