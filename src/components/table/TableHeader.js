import React from "react";
import TableInput from "./TableInput";
import DeleteButton from "./DeleteButton";

function TableHeader(props) {
  return (
    <div className="row" id="tableHeader">
      <div className="cell" style={{ minWidth: "80px" }}>
        #
      </div>
      {props.header.map(column => (
        <div
          className="cell"
          key={column.key}
          style={{ minWidth: column.width }}
          onClick={e => props.sortColumn(e, column.key)}
        >
          <DeleteButton
            classname="deleteColumn"
            keyName={column.key}
            deleteColumn={props.deleteColumn}
          />
          <TableInput
            value={column.label}
            inputChange={props.headerInputChange(column.key)}
            type={"text"}
          />
        </div>
      ))}
    </div>
  );
}

export default TableHeader;
