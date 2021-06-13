// import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { creaStore } from "redux";

import App from "./section_17/components/App";
import reducers from "./section_17/reducers";

ReactDOM.render(
  <Provider store={creaStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
