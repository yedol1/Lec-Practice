import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./modules/index";
import { Provider } from "react-redux";

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
