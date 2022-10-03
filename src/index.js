import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store, { subscribe } from "./redux/redux-store";
import { dispatch } from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));

function rerender(store) {
  return root.render(
    <React.StrictMode>
      <App store={store} dispatch={dispatch} />
    </React.StrictMode>
  );
}

rerender(store.getState());

subscribe(() => {
  let state = store.getState();
  rerender(state);
});

reportWebVitals();
