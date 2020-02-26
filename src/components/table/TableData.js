import React from "react";
import TaskRow from "./TaskRow";

function TableData(props) {
  return (
    <div id="tableBody">
      {Object.values(props.board.tasks).map((task, index) => (
        <TaskRow
          key={index}
          index={index}
          task={task}
          columns={props.board.columns}
          deleteRow={props.deleteRow}
          taskInputChange={props.taskInputChange}
        />
      ))}
    </div>
  );
}

export default TableData;
