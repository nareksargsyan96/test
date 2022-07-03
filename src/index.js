import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Router } from "react-router-dom";
import { history } from "./hooks/history";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
