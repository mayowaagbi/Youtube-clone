import React from "react";
import App from "./App";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
//import store from "./app/store";
import { Provider } from "react-redux";
import store from "./app/store";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
