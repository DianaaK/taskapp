import React from "react";
import FormComponent from "./FormComponent";
import reduxContainer from "../../redux/reduxContainer";
import { actions } from "../../redux/actions";

class Page extends React.Component {
  render() {
    return (
      <div id="boardConfig">
        <h3 id="title"> Configure Board </h3>
        <FormComponent columns={this.props.columns} title={this.props.title} />
        <button id="saveButton">Save board</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    columns: state.columns,
    title: state.title
  };
}

const dispatchToProps = {
  handleTitle: actions.handleTitle,
  handleColumns: actions.handleColumns,
  handleColumnName: actions.handleColumnName,
  handleSelect: actions.handleSelect,
  handleDeleteColumn: actions.handleDeleteColumn,
  handleOptionButtonClicked: actions.handleOptionButtonClicked,
  handleClearButtonClicked: actions.handleClearButtonClicked
};

export default reduxContainer(Page, mapStateToProps, dispatchToProps);
