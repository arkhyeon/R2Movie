import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./Responsible.scss";
import { Provider } from "react-redux";
import rootStore from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={rootStore}>
    <App />
  </Provider>
);
