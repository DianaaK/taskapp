import React from "react";
import ConfigForm from "./ConfigForm";

class Page extends React.Component {
  render() {
    return (
      <div id="boardConfig">
        <h3 id="title"> Configure Board </h3>
        <ConfigForm />
      </div>
    );
  }
}

export default Page;
