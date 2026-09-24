import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// This is the very first file that runs.
// ReactDOM.createRoot() finds the <div id="root"> from index.html
// and .render(<App />) tells React: "put our whole app inside that div."
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
