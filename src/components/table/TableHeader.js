import React from "react";
import TableInput from "./TableInput";
import DeleteButton from "./DeleteButton";

function TableHeader(props) {
  return (
    <div className="row" id="tableHeader">
      <div className="cell" style={{ minWidth: "80px" }}>
        #
      </div>
      {props.columns.map(column => (
        <div
          className="cell"
          key={column.id}
          style={{ minWidth: column.width }}
          onClick={e => props.sortColumn(e, column.key)}
        >
          <DeleteButton
            classname="deleteColumn"
            deleteId={column.id}
            deleteColumn={props.deleteColumn}
          />
          <TableInput
            value={column.label}
            inputChange={props.headerInputChange(column.id)}
            type={"text"}
          />
        </div>
      ))}
    </div>
  );
}

export default TableHeader;
