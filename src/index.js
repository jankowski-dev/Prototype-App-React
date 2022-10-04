import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));

function rerender() {
  return root.render(
    <React.StrictMode>
      <App store={store.getState()} dispatch={store.dispatch} />
    </React.StrictMode>
  );
}

rerender();

store.subscribe(() => rerender());

reportWebVitals();
