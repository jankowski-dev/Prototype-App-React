import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

function rerender() {
  return root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

rerender();

store.subscribe(() => rerender());

reportWebVitals();
