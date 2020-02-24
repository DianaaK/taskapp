import React from "react";

function AddButton(props) {
  return (
    <button className="addNew" onClick={props.handleOnClick}>
      {props.text}
    </button>
  );
}

export default AddButton;
