import React from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";

function TableComponent(props) {
  return (
    <div id="table">
      <TableHeader
        columns={props.board.columns}
        deleteColumn={props.deleteColumn}
        headerInputChange={props.headerInputChange}
        sortColumn={props.sortColumn}
      />
      <TableData
        board={props.board}
        deleteRow={props.deleteRow}
        taskInputChange={props.taskInputChange}
      />
    </div>
  );
}

export default TableComponent;
