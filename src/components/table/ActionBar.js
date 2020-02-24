import React from "react";
import AddButton from "./AddButton";

function ActionBar(props) {
  const generateRowId = board => {
    const maxId = Math.max.apply(
      Math,
      board.tasks.map(task => task.id)
    );
    const id = (board.tasks.length > 0 ? maxId : 0) + 1;
    return id;
  };

  const generateColumnId = board => {
    const id = board.header[board.header.length - 1].key.replace("col", "") + 1;
    return id;
  };

  const generateRow = newId => {
    let obj = { id: newId };
    props.board.header.forEach(column => {
      if (column.key !== "id") obj[column.key] = "";
    });
    return obj;
  };

  const generateColumn = newId => {
    return {
      key: "col" + newId,
      label: "New Column",
      type: "input",
      inputType: "text"
    };
  };

  const addNewRow = () => {
    props.addNewRow(generateRow(generateRowId(props.board)));
  };

  const addNewColumn = () => {
    props.addNewColumn(generateColumn(generateColumnId(props.board)));
  };

  return (
    <div id="actionBar">
      <AddButton text="Adauga coloana" handleOnClick={addNewColumn} />
      <AddButton text="Adauga rand" handleOnClick={addNewRow} />
    </div>
  );
}

export default ActionBar;
