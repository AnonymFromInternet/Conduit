import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import store from "./Shared/GlobalStore/GlobalStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
