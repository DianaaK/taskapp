import React from "react";
import ReactDOM from "react-dom";
import "./formStyle.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

import Page from "./components/boardConfig/Page";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Page />, document.getElementById("root"));

serviceWorker.unregister();
