import React from "react";
import { Provider } from "react-redux";
import Site from "./components/table/Site";
import { store } from "./redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Site />
      </Provider>
    );
  }
}

export default App;
