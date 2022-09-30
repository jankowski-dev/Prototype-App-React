import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import dispatch from "./redux/dispatch";

export let rerender = () => {
  return root.render(
    <React.StrictMode>
      <App state={store.state} dispatch={dispatch} />
    </React.StrictMode>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App state={store.state} dispatch={dispatch} />
  </React.StrictMode>
);

reportWebVitals();




