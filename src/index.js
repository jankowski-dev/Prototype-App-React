import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import dispatch from "./redux/dispatch";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} dispatch={dispatch} />
  </React.StrictMode>
);

export function rerender() {
  return root.render(
    <React.StrictMode>
      <App store={store} dispatch={dispatch} />
    </React.StrictMode>
  );
};

reportWebVitals();




