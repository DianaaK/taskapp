import React from "react";
import { Provider } from "react-redux";
import Site from "./components/table/Site";
import Page from "./components/boardConfig/Page";
import { store } from "./redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Page />
      </Provider>
    );
  }
}

export default App;
