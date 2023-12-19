import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import { Provider } from "react-redux";
import store from "/Users/razumova/aviasales/src/components/store/index.js";

const root = document.getElementById("root");
const root1 = createRoot(root);


root1.render(
  <Provider store={store}>
    <App />
  </Provider>
);
