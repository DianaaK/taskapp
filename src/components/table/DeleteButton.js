import React from "react";

function DeleteButton(props) {
  const handleOnClick = event => {
    event.stopPropagation();
    return props.classname === "deleteRow"
      ? props.deleteRow(props.keyName)
      : props.deleteColumn(props.keyName);
  };

  return (
    <button className={props.classname} onClick={handleOnClick}>
      -
    </button>
  );
}

export default DeleteButton;
