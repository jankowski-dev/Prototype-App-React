import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let rerender = () => {
  return root.render(
    <React.StrictMode>
      <App state={store.state} dispatch={dispatch} />
    </React.StrictMode>
  );
};

let store = {
  state: {
    defaultTitle: "First name",

    last: [
      {
        id: "1",
        title: "Hello world 3",
        category: "Java",
      },
      {
        id: "2",
        title: "Hello world 4",
        category: "Rust",
      },
    ],
    favorites: [
      {
        id: "2",
        title: "Hello world 4",
        category: "Rust",
      },
      {
        id: "3",
        title: "Hello world 6",
        category: "Python",
      },
    ],
    subscribe: [
      {
        id: "3",
        title: "Hello world 6",
        category: "Python",
      },
    ],
    main: [
      {
        id: "1",
        title: "Hello world 3",
        category: "Java",
      },
      {
        id: "2",
        title: "Hello world 4",
        category: "Rust",
      },
      {
        id: "3",
        title: "Hello world 6",
        category: "Python",
      },
    ],
  },
  sendPost(data) {
    this.state.main.push(data);
    rerender();
  },
  updateTextarea(data) {
    this.state.defaultTitle = data;
    rerender();
  },
};

let dispatch = (action) => {
  if (action.type === "SEND-MESSAGE") {
    store.state.main.push(action.data);
    rerender();
  }
  if (action.type === "UPDATE-TEXTAREA") {
    store.state.defaultTitle = action.data;
    rerender();
  }
};

export let sendPostActionCreater = (data) => {
  return {
    type: "SEND-MESSAGE",
    data: data,
  };
};

export let updateTextareaActionCreater = (text) => {
  return { type: "UPDATE-TEXTAREA", data: text };
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App state={store.state} dispatch={dispatch} />
  </React.StrictMode>
);

reportWebVitals();
