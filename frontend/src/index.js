import React from "react";
import ReactDOM from "react-dom";
// Provider connects React-Redux to app
// We wrap App below and pass in store
import { Provider } from "react-redux";
import store from './store'
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
